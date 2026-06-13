const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  title: String,

  price: Number,

  quantity: {
    type: Number,
    default: 1
  },

  mainImg: String

});

module.exports =
mongoose.model("Cart", cartSchema);