import { useState } from "react";

function Cart() {
  const token = localStorage.getItem("token");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

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

  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cart];

    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity--;
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const gst = Math.round(subtotal * 0.18);
  const deliveryCharge = subtotal > 0 ? 99 : 0;
  const grandTotal = subtotal + gst + deliveryCharge;

  const goToCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is Empty");
      return;
    }

    window.location.href = "/checkout";
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
      <h2>My Cart</h2>

      <hr />

      {cart.length === 0 ? (
        <h4>Cart Is Empty</h4>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={item._id} className="card p-3 mb-3">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <h4>₹{item.price}</h4>

              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => decreaseQty(index)}
                >
                  -
                </button>

                <span className="mx-3">{item.quantity || 1}</span>

                <button
                  className="btn btn-success"
                  onClick={() => increaseQty(index)}
                >
                  +
                </button>

                <button
                  className="btn btn-dark ms-3"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="card p-4 mt-4">
            <h4>Price Details</h4>

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

            <h3 className="d-flex justify-content-between">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </h3>

            <button className="btn btn-success mt-3" onClick={goToCheckout}>
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;