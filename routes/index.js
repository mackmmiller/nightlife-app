var express = require("express");
var User = require("../models/User");
var yelp = require("../config/yelp");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Nightout" });
});

/* POST home page (search according to location) */
router.post("/", function(req, res, next) {
  const location = req.body.location;
  yelp(req, res, location);
});

module.exports = router;
