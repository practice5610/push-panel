const express = require("express");
const router = express.Router();
const requirePrivillage = require("./authentication/requirePrivilige.js");

//importing routes
const authRoutes = require("./authentication/index.js");
const adminRoutes = require("./admin/index.js");
const userRoutes = require("./user/index.js");

router.use("/auth", authRoutes);
router.use("/admin", requirePrivillage("admin"), adminRoutes);
router.use("/user", userRoutes);

module.exports = router;
