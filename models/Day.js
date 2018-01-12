var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
  name: { type: String, required: true },
  attending: { type: Number, required: true }
});

var DaySchema = new Schema({
  date: { type: String, required: true, unique: true },
  venues: [VenueSchema]
});

// Methods ====================================================================
DaySchema.methods.attendLocation = function(location) {
  console.log("attendLocation called", location);
};

module.exports = mongoose.model("Day", DaySchema);
