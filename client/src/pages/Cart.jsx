import { useState } from "react";

function Cart() {

  const [cart, setCart] = useState(
    JSON.parse(
      localStorage.getItem("cart")
    ) || []
  );

  const increaseQty = (index) => {

    const updatedCart = [...cart];

    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1) + 1;

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };

  const decreaseQty = (index) => {

    const updatedCart = [...cart];

    if (
      (updatedCart[index].quantity || 1) > 1
    ) {

      updatedCart[index].quantity--;

    }

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };

  const removeItem = (id) => {

    const updatedCart =
      cart.filter(
        (item) => item._id !== id
      );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price *
      (item.quantity || 1),
    0
  );

  return (

    <div className="container mt-5">

      <h2>My Cart</h2>

      <hr />

      {cart.length === 0 ? (

        <h4>Cart Is Empty</h4>

      ) : (

        <>
          {cart.map((item, index) => (

            <div
              key={item._id}
              className="card p-3 mb-3"
            >

              <h5>{item.title}</h5>

              <p>{item.description}</p>

              <h4>₹{item.price}</h4>

              <div>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    decreaseQty(index)
                  }
                >
                  -
                </button>

                <span className="mx-3">
                  {item.quantity || 1}
                </span>

                <button
                  className="btn btn-success"
                  onClick={() =>
                    increaseQty(index)
                  }
                >
                  +
                </button>

                <button
                  className="btn btn-dark ms-3"
                  onClick={() =>
                    removeItem(item._id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <hr />

          <h3>Total ₹{total}</h3>

          <a
            href="/checkout"
            className="btn btn-success"
          >
            Proceed To Checkout
          </a>

        </>

      )}

    </div>

  );
}

export default Cart;