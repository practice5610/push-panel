const express = require("express");
const authRoutes = express.Router();

//Importing models
const User = require("../../models/user.js");

//authentication middlewares
//const Register = require("./register.js");
const RemoveToken = require("./removetoken.js");
const Login = require("./login.js");
const modifyUser = require("./modify.js");

//Register Route
//authRoutes.post("/register", Register(User), (req, res) => {
//res.json(res.values);
//});
console.log("testt2");
//Login Route
authRoutes.post("/login", Login(User), (req, res) => {
  res.json({});
});

//password change route
authRoutes.patch("/changepassword", modifyUser(User));

//Token remove route
authRoutes.get("/token/remove", RemoveToken(User), (req, res) => {
  res.json({});
});

module.exports = authRoutes;
