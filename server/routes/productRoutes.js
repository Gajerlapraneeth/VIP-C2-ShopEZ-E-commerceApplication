const express = require("express");

const router = express.Router();

const Product = require("../models/Product");

const {
  protect,
  adminOnly
} = require("../middleware/authMiddleware");

router.get("/", async (req, res) => {

  try {

    const products =
      await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/:id", async (req, res) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.post(
  "/",
  protect,
  adminOnly,
  async (req, res) => {

    try {

      const product =
        await Product.create(req.body);

      res.status(201).json(product);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  async (req, res) => {

    try {

      await Product.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message: "Product Deleted"
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);

module.exports = router;