var db = require('../db/index.js');
var mysql = require('mysql');
var Promise = require('bluebird');
// we're expecting to use a connection object made in index.js -- db
// in the functions below, so that we can open and close a connection within
// a get or post request.


module.exports = {
  messages: {
    get: function () {
      //query server for all messages
      
      db.connection.query('SELECT * FROM messages', function(err, results, fields) {
        console.log('in the get request');
        console.log(`hey im an error: ${err}`);
        console.log(results);
      }); 
      //at the end, return an array that contains message objects
      
    }, // a function which produces all the messages
    post: function () { // a function which can be used to insert a message into the database
      var roomQuery = `
        INSERT INTO rooms (room)
          VALUES 
          ('desk');
        `;
      var userQuery = `INSERT INTO users (username)
          VALUES 
          ('pet');`;

      var messagesQuery = `INSERT INTO messages 
          SET message = 'barf',
            room_id = (
              SELECT id 
              FROM rooms
              WHERE room = 'desk'
            ),
            user_id = (
              SELECT id 
              FROM users
              WHERE username = 'pet'
            );`;

      // callback hell: maybe refactor to promises once anne remembers how
      // she did promises from like yesterday
      //TODO: allow duplicate messages in messages table
      db.connection.query(roomQuery, function(err, results, fields) {
        db.connection.query(userQuery, function(err, results, fields) {
          db.connection.query(messagesQuery, function(err, results, fields) {
            console.log('made it!');
          });
        });
      });
    },  
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

