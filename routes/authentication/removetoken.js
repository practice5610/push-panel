const TokenHandler = require("./TokenHandler");

function RemoveToken(Model) {
  return async (req, res, next) => {
    if (req.user) {
      try {
        const token = new TokenHandler(req.headers["id"]);
        const data = await token.remove(req.headers["key"]);
        console.error(data);
        next();
      } catch (error) {
        console.erro(error);
      }
    } else {
      console.error("something went wrong");
      res.json({ type: "error", messege: "You are not authenticated" });
    }
  };
}

module.exports = RemoveToken;
