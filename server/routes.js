var controller = require('./controllers');
var router = require('express').Router();

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET',
  'access-control-allow-headers': 'content-type, text/plain',
  'access-control-max-age': 10 // seconds
};

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.options('/messages', function(req, res) {
  res.writeHead(200, defaultCorsHeaders);
  res.end('Allow GET, POST, OPTIONS');
});


module.exports = router;

