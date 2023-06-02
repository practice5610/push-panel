const express = require("express");
const userRoutes = express.Router();

//setting up firebase admin
var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//importing models
//const Site = require("../../models/site");

//importing middlewares
const Subscribe = require("./subscribe");

//constants

//GET ROUTES

//POST ROUTES
userRoutes.post("/subscribe", Subscribe(admin));

//PATCH ROUTES

module.exports = userRoutes;
