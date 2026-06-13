const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCartItems,
  deleteCartItem
} = require("../controllers/cartController");

const {
  protect
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  addToCart
);

router.get(
  "/",
  protect,
  getCartItems
);

router.delete(
  "/:id",
  protect,
  deleteCartItem
);

module.exports = router;