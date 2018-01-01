var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

/// User Routes ///

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/* GET signup page. */
router.get("/register", userController.get_register);

/* POST signup page. */
router.post("/register", userController.post_register);

/* GET login page. */
router.get("/login", userController.get_login);

/* POST login page. */
router.post("/login", userController.post_login);

/* GET logout */
router.get("/logout", userController.get_logout);

/* GET profile page. */
router.get("/profile", isLoggedIn, userController.get_profile);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;
