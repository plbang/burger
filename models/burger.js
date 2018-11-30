// Model folder requires the ORM
// Contains all the methods that will be used to modify the ORM for use with the burgers_db

// Dependencies
var orm = require("../config/orm.js");

// Create the burger object

// Select all burger table entries, running function(res) as a callback which will be sent into burgers_controller.js
var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

// Export the database functions for the controller (burger_controllers.js).
module.exports = burger;
