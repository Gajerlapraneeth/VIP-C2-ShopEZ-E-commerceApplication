import { useState } from "react";

function Checkout() {
  const token = localStorage.getItem("token");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "Cash On Delivery"
  });

  if (!token) {
    return (
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#000",
          minHeight: "100vh",
          color: "white"
        }}
      >
        <h2>Please Login First</h2>
        <a href="/login" className="btn btn-warning mt-3">
          Login
        </a>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const gst = Math.round(subtotal * 0.18);
  const deliveryCharge = subtotal > 0 ? 99 : 0;
  const grandTotal = subtotal + gst + deliveryCharge;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is Empty");
      return;
    }

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all delivery details");
      return;
    }

    const order = {
      id: Date.now(),
      ...formData,
      items: cart,
      subtotal,
      gst,
      deliveryCharge,
      grandTotal,
      date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Order Placed Successfully");

    window.location.href = "/orders";
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        <div className="col-md-7">
          <div className="card p-4 mb-4">
            <h4 className="mb-3">Delivery Details</h4>

            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              className="form-control mb-3"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="address"
              className="form-control mb-3"
              rows="3"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>

            <input
              type="text"
              name="city"
              className="form-control mb-3"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              className="form-control mb-3"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

            <select
              name="paymentMethod"
              className="form-control mb-3"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option>Cash On Delivery</option>
              <option>UPI</option>
              <option>Credit/Debit Card</option>
            </select>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card p-4">
            <h4>Order Summary</h4>

            {cart.map((item) => (
              <div
                key={item._id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.title} × {item.quantity || 1}
                </span>
                <span>₹{item.price * (item.quantity || 1)}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>GST 18%</span>
              <span>₹{gst}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Delivery Charges</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <hr />

            <h4 className="d-flex justify-content-between">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </h4>

            <button className="btn btn-warning w-100 mt-3" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;