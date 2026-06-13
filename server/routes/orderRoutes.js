const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders
} = require("../controllers/orderController");

const {
  protect,
  adminOnly
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  createOrder
);

router.get(
  "/all",
  protect,
  adminOnly,
  getOrders
);

module.exports = router;