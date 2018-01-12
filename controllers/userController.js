var User = require("../models/User");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

exports.index = function(req, res) {
  res.send("NOT IMPLEMENTED: USER ROOT PAGE");
};

exports.get_register = function(req, res, next) {
  res.render("register", {
    title: "Register | Nightout",
    message: req.flash("signupMessage")
  });
};

exports.post_register = passport.authenticate("local-signup", {
  successRedirect: "profile",
  failureRedirect: "register",
  failureFlash: true
});

exports.get_login = function(req, res) {
  res.render("login", {
    title: "Login | Nightout",
    message: req.flash("loginMessage")
  });
};

exports.post_login = passport.authenticate("local-login", {
  successRedirect: "/",
  failureRedirect: "login",
  failureFlash: true
});

exports.get_profile = function(req, res) {
  res.render("profile.pug", {
    title: "Profile | Nightout",
    user: req.user.email,
    friends: req.user.id
  });
};

exports.get_logout = function(req, res) {
  req.logout();
  res.redirect("/");
};
