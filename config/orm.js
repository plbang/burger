// Allows us to query and manipulate data from a database using the ORM library

// Dependencies
var connection = require("./connection.js");


var orm = {

// orm.selectAll -- collects all data within the database
// uses cb to pass the result into burger.js
    selectAll: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
            if (err) {
                throw err;
            } cb(result);
        });
    },

// orm.insertOne -- allows us to create new data in the database

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    }
// orm.updateOne -- allows us update data within the database 

}




module.exports = orm;