const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  icon: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  url: {
    type: String,
  },
  autosend: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  skipSites: {
    type: String,
    default: "",
  },
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
