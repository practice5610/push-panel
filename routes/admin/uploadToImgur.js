const Fetch = require("node-fetch");
const { Headers } = require("node-fetch");
const FormData = require("form-data");
async function uploadToImgur(url) {
  try {
    let theHeader = new Headers();
    let theBody = new FormData();
    theBody.append("image", url);
    theBody.append("type", "url");

    theHeader.append("Authorization", "Client-ID 06239827a6f149b");
    const response = await Fetch("https://api.imgur.com/3/upload", {
      method: "POST",
      headers: theHeader,
      body: theBody,
    });

    let resBody = await response.json();
    return resBody.data.link;
  } catch (err) {
    console.error(err);
    return;
  }
}

module.exports = uploadToImgur;
