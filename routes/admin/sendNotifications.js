//import library and models and middlewares
const Notification = require("../../models/notification");

//import functions and classes and variables
const uploadToImgur = require("./uploadToImgur");
const API_URL = require("../url");

function sendNotification(Site, admin) {
  //return the middleware
  return async (req, res) => {
    try {
      //body validation
      if (typeof req.body.skipSites === "string") {
        req.body.skipSites = req.body.skipSites.split(",");
      }

      //add a new notification document
      const notification = new Notification();
      notification.icon = req?.files?.icon
        ? `${API_URL}/uploads/${req.files.icon[0].filename}`
        : req.body.imgurIconUrl || undefined;
      notification.image = req?.files?.image
        ? `${API_URL}/uploads/${req.files.image[0].filename}`
        : req.body.imgurImageUrl || undefined;
      notification.title = req.body.title;
      notification.body = req.body.body;
      notification.url = req.body.url;
      notification.impressions = 0;
      notification.clicked = 0;
      notification.createdAt = new Date();

      let report = await notification.save();

      let imgurIconUrl = req.body.imgurIconUrl;
      let imgurImageUrl = req.body.imgurImageUrl;

      //uploading image to imgur
      if (req?.files?.icon) {
        imgurIconUrl = await uploadToImgur(
          `${API_URL}/uploads/${req.files.icon[0].filename}`
        );
      }
      if (req?.files?.image) {
        imgurImageUrl = await uploadToImgur(
          `${API_URL}/uploads/${req.files.image[0].filename}`
        );
      }

      //setting payload
      const data = {
        url: req.body.url,
        _id: String(report._id),
        title: req.body.title,
        body: req.body.body,
        icon: imgurIconUrl,
        image: imgurImageUrl,
      };

      let sites = await Site.find(
        req.body.sitename ? { sitename: req.body.sitename } : {}
      );
      sites = sites.reduce((arr, site) => {
        if (req.body.skipSites.includes(site.sitename)) return arr;
        return [...arr, `'${site.sitename}'`];
      }, []);
      const topics = [];
      while (sites.length > 0) {
        const spliced = sites.splice(0, 5);
        topics.push(spliced.join(" in topics || ") + " in topics");
      }
      topics.forEach((topic) => send(topic, data));
      res.json({});
    } catch (err) {
      console.error(err);
    }
  };

  async function send(topic, data) {
    try {
      //send notification using a topic on a data
      return await admin.messaging().send({
        //notification: payload,
        condition: topic,
        webpush: {
          notification: {
            title: data.title,
            body: data.body,
            icon: data.icon,
            image: data.image,
          },
          fcmOptions: {
            link: data.url,
          },
          data: {
            url: data.url,
            _id: data._id,
          },
        },
        fcmOptions: {
          analyticsLabel: data._id,
        },
      });
    } catch (errs) {
      console.error(errs);
    }
  }
}

module.exports = sendNotification;
