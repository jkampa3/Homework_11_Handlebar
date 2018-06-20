//requirements
var connection = require("../config/connection.js");

//orm route
var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (value, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
        connection.query(queryString, value, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{
            devoured: true
        }, {
            id: id
        }], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;