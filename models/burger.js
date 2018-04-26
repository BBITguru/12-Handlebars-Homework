// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(ba) {
    orm.all("burgers", function(res) {
      ba(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, ba) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, ba) {
    orm.update("burgers", objColVals, condition, function(res) {
      ba(res);
    });
  },
  delete: function(condition, ba) {
    orm.delete("burgers", condition, function(res) {
      ba(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
