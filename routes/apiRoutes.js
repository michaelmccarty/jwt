let axios = require("axios");
let path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, db) {
  app.get("/scrape", function(req, res) {
    console.log(req.body.username);
  });
};
