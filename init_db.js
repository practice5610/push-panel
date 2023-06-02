const mongoose = require("mongoose");
const Schedule = require("./models/schedule");
const User = require("./models/user");

require("dotenv").config();

//connecting to database
mongoose.connect(process.env["DB_URI"], {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
let db = mongoose.connection;

//Connected to database
db.once("open", async (err) => {
  if (!err) {
    console.log("connected to database");

    //create a new setting
    createSetting().then((res) => {
      console.log("created:", res);
    });
  } else {
    console.log(err);
  }
});

async function createSetting() {
  const user = new User();
  user.username = "admin";
  user.privillage = "admin";
  user.fullName = "The fucking Admin";
  user.password =
    "$2a$10$8wNx2IRuWfYjH0.JojIELOhf/P9Qd0n1vM2xsJm1Owo.TS3S0.8hC";
  await user.save();

  const schedule = new Schedule();
  schedule.from = 7;
  schedule.to = 10;
  schedule.interval = 20;
  await schedule.save();
  process.exit();
}
