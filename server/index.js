const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes =require("./routes/cartRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorHandler =require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use( "/api/orders",orderRoutes);
app.use( "/api/cart",cartRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandler);
// const adminRoutes = require("./routes/adminRoutes");

app.get("/", (req, res) => {
  res.send("ShopEZ Backend Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});


