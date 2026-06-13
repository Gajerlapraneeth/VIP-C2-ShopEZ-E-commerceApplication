function Orders() {

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container mt-5">

      <h2>My Orders</h2>

      <hr />

      {orders.length === 0 ? (
        <h4>No Orders Found</h4>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="card p-3 mb-3"
          >
            <h5>Order ID: {order.id}</h5>

            <p>Address: {order.address}</p>

            <p>Phone: {order.phone}</p>

            <p>Date: {order.date}</p>

            <h6>
              Items: {order.items.length}
            </h6>
          </div>
        ))
      )}

    </div>
  );
}

export default Orders;