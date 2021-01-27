// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.selectAll("burger", (res) => {
      cb(res);
    });
  },
  create: (newBurger, cb) => {
    orm.insertOne("burger", newBurger, (res) => {
      cb(res);
    });
  },
  update: (burgerData, criteria, cb) => {
    orm.updateOne("burger", burgerData, criteria, (res) => {
      cb(res);
    });
  },
  
};

// Export the burger object
module.exports = burger;
