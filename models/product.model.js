const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  pic: String,
});

module.exports = mongoose.model("Product", ProductSchema);
