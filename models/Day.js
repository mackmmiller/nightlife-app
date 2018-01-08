var mongoose = require("mongoose");
var moment = require("moment");
var Schema = mongoose.Schema;

var today = moment().format("MMMM Do YYYY");

var DaySchema = new Schema({
  date: { type: String, default: today, required: true, unique: true },
  attending: {
    location: { type: String, default: Date.now, required: true },
    totalAttending: { type: number, required: true }
  }
});
