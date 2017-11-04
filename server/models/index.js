var db = require('../db/index.js');
var mysql = require('mysql');

// we're expecting to use a connection object made in index.js -- db
// in the functions below, so that we can open and close a connection within
// a get or post request.


module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(err, results, fields) {
        console.log(results);
        callback(results);
      }); 

    }, 
    post: function (username, message, room) { 
      db.connection.connect();

      var queryString = 
        `INSERT INTO messages (username, message, room) VALUES ('${username}', '${message}', '${room}');
        `;

      db.connection.query(queryString, function(err, results, fields) {
        if (err) { throw err; }
        console.log(queryString);
        console.log('completed the post request to database');
        console.log(results);
      });

      db.connection.end();
    },  
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

      // var roomQuery = `
      //   INSERT INTO rooms (room)
      //     VALUES 
      //     ('desk');
      //   `;
      // var userQuery = `INSERT INTO users (username)
      //     VALUES 
      //     ('pet');`;

      // var messagesQuery = `INSERT INTO messages 
      //     SET message = 'barf',
      //       room_id = (
      //         SELECT id 
      //         FROM rooms
      //         WHERE room = 'desk'
      //       ),
      //       user_id = (
      //         SELECT id 
      //         FROM users
      //         WHERE username = 'pet'
      //       );`;
