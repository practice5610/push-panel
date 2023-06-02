const Fetch = require("node-fetch");
const { Headers } = require("node-fetch");
const FormData = require("form-data");

const API_URL = require("../url");
//import("node-fetch").then(async ({ Headers }) => {

function createTemplate(Template) {
  return async (req, res) => {
    try {
      const template = new Template();
      template.title = req.body.title;
      template.body = req.body.body;
      template.url = req.body.url;
      template.skipSites = req.body.skipSites;

      //uploading image to imgur
      if (req.files.icon) {
        let theHeader = new Headers();
        let theBody = new FormData();
        theBody.append(
          "image",
          `${API_URL}/uploads/${req.files.icon[0].filename}`
        );
        theBody.append("type", "url");

        theHeader.append("Authorization", "Client-ID 06239827a6f149b");
        const response = await Fetch("https://api.imgur.com/3/upload", {
          method: "POST",
          headers: theHeader,
          body: theBody,
        });

        let resBody = await response.json();
        template.icon = resBody.data.link;
      }
      if (req.files.image) {
        let imgUrl = `${API_URL}/uploads/${req.files.image[0].filename}`;

        let theHeader = new Headers();
        theHeader.append("Authorization", "Client-ID 06239827a6f149b");

        let theBody = new FormData();
        theBody.append("image", imgUrl);
        theBody.append("type", "url");

        const response = await Fetch("https://api.imgur.com/3/upload", {
          method: "POST",
          headers: theHeader,
          body: theBody,
        });

        let resBody = await response.json();
        template.image = resBody.data.link;
      }

      template.createdAt = new Date();
      let savedTemplate = await template.save();

      res.json({ _id: savedTemplate._id });
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = createTemplate;
