const Site = require("../../models/site");
const Day = require("../../models/day");
async function bulkSubscribe(tokens, sitename, admin) {
  if (tokens.length === 0) return;
  try {
    const response = await admin.messaging().subscribeToTopic(tokens, sitename);
    console.log(sitename, ":", tokens.length, response.successCount)
    if (response.successCount == 0) return;

    let site = await Site.findOne({ sitename: sitename });

    if (!site) {
      //create a new site
      site = new Site();

      //assign all the values
      site.sitename = sitename;
      site.tokens = response.successCount;
      await site.save();
    }

    if (site) {
      //increase the number of tokens on that site
      await Site.findByIdAndUpdate(site._id, {
        $inc: { tokens: response.successCount },
      });
    }

    //handle some visual only stuffs that are not necessary for the server to wrok
    //increase token count of today
    let date_now = new Date();
    let calculatedIndexForToday = Number(
      `${date_now.getFullYear()}${date_now.getMonth()}${date_now.getDate()}`
    );
    let today = await Day.findOne({ index: calculatedIndexForToday });
    if (today) {
      await Day.findByIdAndUpdate(today._id, {
        $inc: { tokens: response.successCount },
      });
    } else {
      today = new Day();
      today.index = calculatedIndexForToday;
      today.tokens = response.successCount;
      today.createdAt = new Date();
      await today.save();
    }
    return;
  } catch (err) {
    console.error(err);
  }
}

module.exports = bulkSubscribe;
