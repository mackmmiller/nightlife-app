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

exports.post_register = function(req, res, next) {
  res.send("NOT IMPLEMENTED: POST USER REGISTRATION");
};

exports.get_login = function(req, res) {
  res.render("login");
};

exports.post_login = function(req, res) {
  res.send("NOT IMPLEMENTED: POST USER LOGIN PAGE");
};

exports.get_profile = function(req, res) {
  res.render("profile.pug");
};

exports.get_logout = function(req, res) {
  res.send("NOT IMPLEMENTED: USER LOGOUT");
  //   req.logout();
  //   res.redirect("/");
};
