// User Model =================================================================

// Mongoose schema and model definitions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// Create the schema for the User database
var UserSchema = new Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

UserSchema
.virtual('url')
.get(function() {
    return '/users/profiles/' + this._id;
});

// Methods ====================================================================
// Generate a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
};

// Check if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// Create the model for users and expose it to the application
module.exports = mongoose.model('User', UserSchema);