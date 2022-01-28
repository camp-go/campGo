const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  nameSite: String,
  localisation: String,
  imageUrl: String,
  capacity: String,
  price: Number,
  phone: Number,
  email: String
});

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

const Item = mongoose.model("Item", itemSchema);

module.exports = {Item, selectAll};