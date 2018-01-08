const dotenv = require("dotenv");
const yelp = require("yelp-fusion");
const apiKey = process.env.YELP_KEY;

module.exports = function(req, res, location) {
  const searchRequest = {
    location: location,
    categories: "bars"
  };
  const client = yelp.client(apiKey);

  client
    .search(searchRequest)
    .then(response => {
      res.render("results", {
        title: "Location Results | Nightout",
        location: location,
        businesses: response.jsonBody.businesses,
        user: req.user ? req.user.email : null
      });
    })
    .catch(e => {
      console.log(e);
    });
};
