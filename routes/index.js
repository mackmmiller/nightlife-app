var express = require("express");
var dayController = require("../controllers/dayController");
var yelp = require("../config/yelp");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Nightout",
    user: req.user ? req.user.email : null
  });
});

/* POST home page (search according to location) */
router.post("/", function(req, res, next) {
  const location = req.body.location;
  res.redirect("/results/" + location);
});

router.get("/results/:location", function(req, res, next) {
  yelp(req, res, req.params.location);
});

router.post("/api/attend", dayController.post_attend);

router.get("/api/attend/:location", dayController.get_attendance);

module.exports = router;
