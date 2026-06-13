import { useState } from "react";

function Checkout() {

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const placeOrder = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is Empty");
      return;
    }

    const order = {
      id: Date.now(),
      address,
      phone,
      items: cart,
      date: new Date().toLocaleString()
    };

    let orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order Placed Successfully");

    window.location.href = "/orders";
  };

  return (
    <div className="container mt-5">

      <h2>Checkout</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Delivery Address"
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Phone Number"
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <button
        className="btn btn-success"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>
  );
}

export default Checkout;