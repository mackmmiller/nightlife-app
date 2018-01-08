// Set up variables ===========================================================
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/User");

// Expose the function to the application
module.exports = function(passport) {
  // Passport session setup

  // Serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Local Signup ===========================================================
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        process.nextTick(function() {
          User.findOne({ email: email }, function(err, user) {
            if (err) return done(err);
            if (user) {
              return done(
                null,
                false,
                req.flash("signupMessage", "That email is already taken.")
              );
            } else {
              var newUser = new User();
              newUser.email = email;
              newUser.password = newUser.generateHash(password);

              // Save the user
              newUser.save(function(err) {
                if (err) throw err;
                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );

  // Local Login ============================================================
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        User.findOne({ email: email }, function(err, user) {
          if (err) return done(err);
          if (!user)
            return done(
              null,
              false,
              req.flash("loginMessage", "No such user found.")
            );
          if (!user.validPassword(password))
            return done(
              null,
              false,
              req.flash("loginMessage", "Oops! Wrong password.")
            );
          return done(null, user);
        });
      }
    )
  );
};
