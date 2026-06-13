const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  mainImg: String,
  carousel: [String],
  category: String,
  sizes: [String],
  gender: String,
  price: Number,
  discount: Number
});

module.exports = mongoose.model("Product", productSchema);