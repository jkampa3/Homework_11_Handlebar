//requirement
var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  create: function (value, cb) {
    orm.insertOne(value, function (res) {
      cb(res);
    });
  },
  update: function (id, cb) {
    orm.updateOne(id, function (res) {
      cb(res);
    });
  }
  //delete:
};

module.exports = burgers;