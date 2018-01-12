var Day = require("../models/Day");
var moment = require("moment");
const today = moment().format("MMMM Do YYYY");

exports.get_attendance = function(req, res, done) {
  const location = req.params.location;
  console.log(location);
  Day.findOne({ date: today }, function(err, match) {
    if (err) return done(err);
    if (match) {
      //res.json({ data: 1 });
      const venue = match.venues.filter(bar => bar.name === location);
      if (venue.length == 0) {
        res.json({ data: 0 });
      } else {
        console.log(venue);
        res.json({ data: venue[0].attending });
      }
    } else {
      res.json({ data: 0 });
    }
  });
};

exports.post_attend = function(req, res, done) {
  const location = req.body.location;
  const willAttend = req.body.willAttend;
  console.log(willAttend);

  // Query if today's date has been created yet
  Day.findOne({ date: today }, function(err, match) {
    // Network error.
    if (err) return done(err);
    if (match) {
      // Today's date has already been created.
      console.log("Match found... Updating");
      const venue = match.venues.filter(bar => bar.name === location);
      if (venue.length == 0) {
        console.log("Venue wasn't found... Creating new venue");
        const newVenue = {
          name: location,
          attending: 1
        };
        match.venues.push(newVenue);
        match.save((err, updatedVenues) => {
          if (err) return handleError(err);
          res.send(updatedVenues);
        });
      } else {
        console.log("Venue found... Updating attendance");
        venue[0].attending++;
        console.log(venue);
        match.save((err, updatedAttendance) => {
          if (err) return handleError(err);
          res.send(updatedAttendance);
        });
      }
    } else {
      // Today's date wasn't found.
      // Creating a new day.
      console.log("No match found... Creating new day");
      var newDay = new Day();
      newDay.date = today;
      newDay.venues = {
        name: location,
        attending: 1
      };
      // Save the day
      newDay.save(function(err) {
        if (err) throw err;
        console.log("Day saved");
        return done(null, newDay);
      });
    }
  });
};
