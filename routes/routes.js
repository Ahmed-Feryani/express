const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home");
});
router.get("/services", (req, res, next) => {
  res.render("ourServices");
});
router.get("/contact", (req, res, next) => {
  res.render("contactUs");
});

module.exports = router;
