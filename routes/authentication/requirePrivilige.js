function requirePrivillage(privillage) {
  return function (req, res, next) {
    if (req.user) {
      if (req.user.privillage === privillage) {
        next();
      }
      return;
    }

    //res.status(401).json({ err: "Unauthorized" });
    next();
    return;
  };
}
module.exports = requirePrivillage;
