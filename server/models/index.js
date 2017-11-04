var db = require('../db/index.js');
var mysql = require('mysql');
// we're expecting to use a connection object made in index.js -- db
// in the functions below, so that we can open and close a connection within
// a get or post request.


module.exports = {
  messages: {
    get: function () {
      db.connection.connect();
      db.connection.query('SELECT * FROM messages', function(err, results, fields) {
      // db.connection;
      // if (err) {
      //   throw err;
      // }
        console.log(results);
      });
      // db.connection.end();
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

