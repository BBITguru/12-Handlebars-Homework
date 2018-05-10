// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(burgBase) {
    orm.all("burgers", function(res) {
      burgBase(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, burgBase) {
    orm.create("burgers", cols, vals, function(res) {
      burgBase(res);
    });
  },
  update: function(objColVals, condition, burgBase) {
    orm.update("burgers", objColVals, condition, function(res) {
      burgBase(res);
    });
  },
  delete: function(condition, burgBase) {
    orm.delete("burgers", condition, function(res) {
      burgBase(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
