var models = require('../models');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET',
  'access-control-allow-headers': 'content-type, text/plain',
  'access-control-max-age': 10 // seconds
};

var headers = defaultCorsHeaders;

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (results) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(results));
      });
      // res.writeHead(200, headers);
      // res.end('hey im workin');
    }, 
    post: function (req, res) {
      console.log('hey im the server post request');
      console.log(req.body);
      var username = req.body.username;
      var message = req.body.message;
      var roomname = req.body.roomname;
      models.messages.post(username, message, roomname);
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

