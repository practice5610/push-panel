const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  privillage: {
    type: String,
    default: "user",
    required: false,
  },
});

let User = mongoose.model("User", userSchema);
module.exports = User;
