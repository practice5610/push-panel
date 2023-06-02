const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  from: {
    type: Number,
  },
  to: {
    type: Number,
  },
  interval: {
    type: Number,
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
