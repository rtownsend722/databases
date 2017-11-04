var models = require('../models');
console.log(models);

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type, text/plain',
  'access-control-max-age': 10 // seconds
};

module.exports = {
  messages: {
    get: function (req, res) {

      var databaseResult = models.messages.get();
      res.writeHead(200, defaultCorsHeaders);
      res.end(databaseResult);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('hey im the post request');
      //this is how to acces the message object
      console.log(req.body);
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

