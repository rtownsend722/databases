-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  username text
);

CREATE TABLE rooms (
  id int PRIMARY KEY AUTO_INCREMENT,
  room text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int PRIMARY KEY AUTO_INCREMENT,
  message text,
  user_id int,
  room_id int,
  FOREIGN KEY(user_id)
    REFERENCES users(id), 

  FOREIGN KEY(room_id)
    REFERENCES rooms(id)
);

/*Dummy Data*/
-- INSERT INTO rooms (room)
--   VALUES 
--   ('lobby');

-- INSERT INTO users (username)
--   VALUES 
--   ('Jane');

-- INSERT INTO messages 
--   SET message = 'hello',
--     room_id = (
--       SELECT id 
--       FROM rooms
--       WHERE room = 'lobby'
--     ),
--     user_id = (
--       SELECT id 
--       FROM users
--       WHERE username = 'Jane'
--     );

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

