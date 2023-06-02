const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  sitename: {
    type: String,
    required: true,
  },
  clusters: {
    type: Number,
    default: 1,
  },
  tokens: {
    type: Number,
    default: 0,
  },
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
