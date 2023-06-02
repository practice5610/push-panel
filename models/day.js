const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  tokens: {
    type: Number,
  },
});

daySchema.index({ index: -1 });

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
