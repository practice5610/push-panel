const express = require("express");
const adminRoutes = express.Router();
const admin = require("firebase-admin");
const fs = require("fs");

//setting up multer
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

//importing models
const Site = require("../../models/site");

//importing middlewares
//const getUsers = require("./users/get");
const get = require("../../helper/getSortPaginate");
const sendNotification = require("./sendNotifications");
const Day = require("../../models/day");
const Notification = require("../../models/notification");
const Template = require("../../models/template");
const createTemplate = require("./createTemplate");
const Schedule = require("../../models/schedule");

//ROUTE OPTIONS
const notificationRouteOptions = {
  searchFields: ["title", "body"],
  allowedSortings: ["createdAt"],
};
const templateRouteOptions = {
  searchFields: ["title", "body"],
  allowedSortings: ["createdAt"],
};
const sitesRouteOptions = {
  searchFields: ["sitename"],
  allowedSortings: ["sitename, tokens"],
};

//GET ROUTES
adminRoutes.get("/notifications", get(Notification, templateRouteOptions));
adminRoutes.get("/templates", get(Template, notificationRouteOptions));
adminRoutes.get("/sites", get(Site, sitesRouteOptions));
adminRoutes.get("/schedule", async (req, res) => {
  res.json(await Schedule.findOne());
});
adminRoutes.get("/counttokenswithin/:days", async (req, res) => {
  let days;
  if (req.params.days !== "all") {
    days = await Day.find().sort({ _id: -1 }).limit(Number(req.params.days));
  } else {
    days = await Day.find();
  }
  let tokens = 0;
  days.forEach((day) => {
    tokens += day.tokens;
  });
  res.json({ tokens: tokens });
});
adminRoutes.get("/tokenswithin/:days", async (req, res) => {
  const days = await Day.find()
    .sort({ _id: -1 })
    .limit(Number(req.params.days));
  res.json(days);
});

//POST ROUTES
adminRoutes.post(
  "/templates",
  upload.fields([{ name: "icon" }, { name: "image" }]),
  createTemplate(Template)
);
adminRoutes.post(
  "/sendnotification",
  upload.fields([{ name: "icon" }, { name: "image" }]),
  sendNotification(Site, admin)
);
adminRoutes.post("/sites", async (req, res) => {
  try {
    const site = new Site(req.body);
    await site.save();
    res.json(site);

    //write the sites as JSON to ../../whitelist.json
    let sites = await Site.find();
    sites = sites.map((site) => "https://" + site.sitename);
    fs.writeFileSync("./whitelist.json", JSON.stringify(sites));
  } catch (err) {
    console.error(err);
  }
});

//PATCH ROUTES
adminRoutes.patch("/templates/:id", async (req, res) => {
  await Template.findByIdAndUpdate(req.params.id, {
    autosend: req.body.autosend,
  });
  res.json({});
});

adminRoutes.patch("/schedule", async (req, res) => {
  await Schedule.updateOne({}, req.body);
  res.json({});
});

//DELETE ROUTES
adminRoutes.delete("/templates/:id", async (req, res) => {
  await Template.findByIdAndDelete(req.params.id);
  res.json({});
});
adminRoutes.delete("/sites/:id", async (req, res) => {
  await Site.findByIdAndDelete(req.params.id);
  res.json({});
});

//autosend shits
let intervalCounter = 0;
let sentCounter = 0;
setInterval(async () => {
  //interval stuffs
  const schedule = await Schedule.findOne();
  if (!schedule) {
    return;
  }
  intervalCounter++;
  if (intervalCounter < schedule.interval) {
    return;
  }
  intervalCounter = 0;

  //scheduler
  let d = new Date();
  let currentHour = d.getHours();
  if (
    schedule.to < schedule.from &&
    currentHour < schedule.from &&
    currentHour > schedule.to
  ) {
    return;
  } else if (currentHour < schedule.from || currentHour > schedule.to) {
    return;
  }

  //calculate the skipValue
  const numberOfAutoSendable = await Template.countDocuments({
    autosend: true,
  });

  //reseet sentCounter
  if (numberOfAutoSendable < sentCounter) {
    sentCounter = 0;
  }

  //increase the sentCounter
  sentCounter++;
  const skipValue = sentCounter - 1;

  //get the template
  const template = await Template.findOne({ autosend: true }).skip(skipValue);
  if (!template) {
    return;
  }

  //send the notification
  await sendNotification(Site, admin)(
    {
      body: {
        title: template.title,
        body: template.body,
        url: template.url,
        imgurIconUrl: template.icon,
        imgurImageUrl: template.image,
        skipSites: template.skipSites,
      },
    },
    {
      json: () => {},
    }
  );
}, 1 * 60 * 1000);

module.exports = adminRoutes;
