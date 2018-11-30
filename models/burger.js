// Model folder requires the ORM
// Contains all the methods that will be used to modify the ORM for use with the burgers_db

// Dependencies
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
    // Select all burger table entries, running function(res) as a callback which will be sent into burgers_controller.js
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },
  
    // The variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
  
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burger_controllers.js).
  module.exports = burger;