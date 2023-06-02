const bcrypt = require("bcryptjs");
const TokenHandler = require("./TokenHandler.js");
const User = require("../../models/user.js");

function isValid(user) {
  if (!user.username) {
    return false;
  }
  if (!user.fullName) {
    return false;
  }
  if (!user.password) {
    return false;
  }
  return true;
}

function Register(Model) {
  return async (req, res, next) => {
    if (!isValid(req.body)) {
      res.json({ err: "Provide all fields" });
      return;
    }
    try {
      //querry the user Model using the provided phone and password
      let user = await Model.find({ username: req.body.username }).exec();

      //if any user exist by this given username or email then return;
      if (user.length !== 0) {
        res.json({ err: "username is already taken" });
        return;
      }

      //create a new instance of User Model;
      let thisUser = new Model();

      //set all the values from req body to the instance of User
      thisUser.username = req.body.username;
      thisUser.fullName = req.body.fullName;

      //hash the password from req.body and store it
      let salt = bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync(req.body.password, salt);
      thisUser.password = hashedPassword;

      //call the save method of the new instance of User Model;
      const createdUser = await thisUser.save();

      //setting the createdUser to req.user
      req.user = createdUser;

      //generate a token for this user and set them on response header
      //initiate
      let userToken = new TokenHandler();
      //call getToken method
      await userToken.getToken(createdUser._id);
      //set id and key to response header
      res.setHeader("id", userToken.id);
      res.setHeader("key", userToken.key);

      //also send the id and key as response body
      res.values = { id: userToken.id, key: userToken.key };
      next();
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = Register;
