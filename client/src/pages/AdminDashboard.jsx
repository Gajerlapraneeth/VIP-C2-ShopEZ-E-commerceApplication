function AdminDashboard() {
  return (
    <div className="container-fluid mt-5"
  style={{
    backgroundColor: "#000",
    minHeight: "100vh",
    color: "white"
  }}>

      <h1>Admin Dashboard</h1>

      <div className="row mt-4">

        <div className="col-md-4">

          <div className="card p-3">

            <h4>Products</h4>

            <a
              href="/products"
              className="btn btn-primary"
            >
              View Products
            </a>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-3">

            <h4>Orders</h4>

            <a
              href="/orders"
              className="btn btn-success"
            >
              View Orders
            </a>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-3">

            <h4>Manage Products</h4>

            <a
              href="/admin-products"
              className="btn btn-danger"
            >
              Manage Products
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;