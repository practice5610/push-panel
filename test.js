const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/push_panel", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
let db = mongoose.connection;

db.once("open", async (err) => {
  if (!err) {
    console.log("connected to database");
  } else {
    console.log(err);
  }
});
