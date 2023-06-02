//Import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//constants
const whitelist = require("./whitelist.json");
const PORT = process.env.PORT || 8000;
const DB_URI = process.env["DB_URI"];
const API_URL = require("./routes/url");

//Initializing express app
const app = express();

//using the cors package to manasge all the shits about cors
whitelist.push(API_URL);
console.log(whitelist)
var corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Importing models
const User = require("./models/user.js");

//Importing middlewares
const Authenticate = require("./routes/authentication/auth.js");

//Importing router
const router = require("./routes/index.js");

//connecting to database
mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
let db = mongoose.connection;

//Using coustom middlewares
app.use(Authenticate(User));

//Connected to database
db.once("open", async (err) => {
  if (!err) {
    console.log("connected to database");
  } else {
    console.log(err);
  }
});

//Setting express router
app.use("/api", router);

app.use("/uploads", express.static("uploads"));
app.use("/", express.static("public"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`server started at port ${PORT}`);
  }
});
