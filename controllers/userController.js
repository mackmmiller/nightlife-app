var User = require("../models/User");
var passport = require("passport");
var LocalStrategy = require("passport-local");

exports.index = function(req, res) {
  res.send("NOT IMPLEMENTED: USER ROOT PAGE");
};

exports.get_register = function(req, res) {
  res.send("NOT IMPLEMENTED: GET USER REGISTER PAGE");
};

exports.post_register = function(req, res) {
  res.send("NOT IMPLEMENTED: POST USER REGISTER PAGE");
};

exports.get_login = function(req, res) {
  res.send("NOT IMPLEMENTED: GET USER LOGIN PAGE");
};

exports.post_login = function(req, res) {
  res.send("NOT IMPLEMENTED: POST USER LOGIN PAGE");
};

exports.get_logout = function(req, res) {
  res.send("NOT IMPLEMENTED: USER LOGOUT");
  //   req.logout();
  //   res.redirect("/");
};
