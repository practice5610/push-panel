const bulkSubscribe = require("./bulkSubscribe");
const tokens = {};

function Subscribe(admin) {
  //interval for bulkSubscribing, in case it doesnt reach 1k tokens
  setInterval(async () => {
    try {
      await bulkWrapper(Object.keys(tokens), 0);
    } catch (err) {
      console.error(err);
    }
  }, 1000);

  //all these to make a delay of 15 secs between each req
  async function bulkWrapper(sitenames, n) {
    try {
      if (sitenames.length === n) return;
      await bulkSubscribe(
        tokens[sitenames[n]].splice(0, 1000),
        sitenames[n],
        admin
      );

      setTimeout(() => bulkWrapper(sitenames, n + 1), 15 * 1000);
    } catch (err) {
      console.error(err);
    }
  }

  return async (req, res) => {
	  console.log(req.headers.origin)
    try {
      if (!req.body.token || !req.body.sitename) {
        res.json({});
        return;
      }
      if (!tokens[req.body.sitename]) tokens[req.body.sitename] = [];
      tokens[req.body.sitename].push(req.body.token);
      res.json({});

      //bulkSubscribe on 1000 tokens,
      //because of the fcm limit on token count on each subscribeToTopic request
      if (tokens[req.body.sitename].length < 1000) return;
      await bulkSubscribe(
        tokens[req.body.sitename].splice(0, 1000),
        req.body.sitename,
        admin
      );
      return;
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = Subscribe;
