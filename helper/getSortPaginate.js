function get(
  Model,
  {
    customQuerry,
    poppulateFields = [],
    allowedSortings = [],
    searchFields,
    stateField,
  }
) {
  return async (req, res) => {
    //this route is a little bit different than others cause I tried to do things just a little differently
    //here the data gets querried from the database than stored in req.result.values
    //then I just call the next()

    //setting some variables using the req datas
    let page = Number(req.query.page) || 1;
    let perPage = Number(req.query.perPage) || 100;
    let startIndex = (page - 1) * perPage;

    //setting res.result as an empty object which is gonna store the values object
    res.result = {};
    try {
      //if req provides an id query than its served a array with only one object that is querried using the id
      if (req.query.id) {
        res.result.values = [await Model.findById(Number(req.query.id))];
        res.result.total = 1;
        res.json(res.result);
        //next();
      }

      let query = {};

      //customQuerry
      if (customQuerry) {
        query = customQuerry;
      }

      //searching
      if (req.query.q && searchFields) {
        let searchExp = new RegExp(req.query.q, "gi");
        query = {
          ...query,
          $or: [],
        };

        searchFields.forEach((fieldName) => {
          let searchObject = {};
          searchObject[fieldName] = searchExp;
          query.$or.push(searchObject);
        });
      }

      //if request has any state and stateField is specified in the options then use the state to query
      if (req.query.state && stateField) {
        query[stateField] = req.query.state;
      }

      //querring the database and storing the response in res.result.values
      res.result.total = await Model.countDocuments(query);
      res.result.data = Model.find(query);

      //looping thorough allowed fieldNames and if any fieldName matches the sortBy then process the query accordingly
      allowedSortings.forEach((fieldName) => {
        if (req.query.sortBy === fieldName) {
          let sortingQuery = {};

          let sortingOrder = -1;
          if (req.query.sortingOrder === "ASC") {
            sortingOrder = 1;
          }

          sortingQuery[fieldName] = sortingOrder;
          res.result.data.sort(sortingQuery);
        }
      });

      //using the first allowed sorting field if no sortBy in the req
      if (!req.query.sortBy && allowedSortings) {
        let sortingQuery = {};
        sortingQuery[allowedSortings[0]] = -1;
        res.result.data.sort(sortingQuery);
      }

      //pagination
      res.result.data.skip(startIndex).limit(perPage);

      //populate the fields specified in the options object
      poppulateFields.forEach((fieldName) => {
        res.result.data.populate(fieldName);
      });

      //execute the query
      res.result.data = await res.result.data.exec();

      res.json(res.result);

      //next();
    } catch (errs) {
      console.log(errs);
    }
  };
}

module.exports = get;
