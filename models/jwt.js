const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
