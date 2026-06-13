const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  name: String,
  email: String,
  mobile: String,

  address: String,
  pincode: String,

  title: String,
  description: String,

  price: Number,
  quantity: Number,

  paymentMethod: String,

  orderDate: {
    type: Date,
    default: Date.now
  }

});

module.exports =
mongoose.model("Order", orderSchema);