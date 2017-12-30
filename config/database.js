const dotenv = require('dotenv').config();

module.exports = {
    'url': process.env.MONGOLAB_URI,
    'user': process.env.MONGOLAB_USER,
    'password': process.env.MONGOLAB_PASSWORD
}