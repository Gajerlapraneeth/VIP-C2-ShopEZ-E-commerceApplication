import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./pages/ProductDetails";
import AdminProducts from "./pages/AdminProducts";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
  <Route path="/products" element={<Products />} />
     <Route path="/profile" element={<Profile />} />
   <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
<Route path="/orders" element={<Orders />} />
<Route path="/admin"element={<AdminDashboard />}/>
<Route path="/product/:id"element={<ProductDetails />}/>
<Route path="/admin-products"element={<AdminProducts />}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;