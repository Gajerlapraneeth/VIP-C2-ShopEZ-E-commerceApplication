const express = require("express");
const router = express.Router();

// const { registerUser } = require("../controllers/authController");

const {
  registerUser,
  loginUser
} = require("../controllers/authController");
router.post("/login", loginUser);

router.get("/test", (req, res) => {
  res.send("Auth Route Working");
});


router.post("/register", registerUser);

module.exports = router;

