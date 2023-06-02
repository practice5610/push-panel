const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
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
  impressions: {
    type: Number,
  },
  clicked: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
