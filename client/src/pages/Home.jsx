import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await API.get("/products");
      setProducts(res.data.slice(0, 6));
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <div className="container py-5">

        <div
          className="text-white p-5 rounded-4 text-center mb-5"
          style={{
            background: "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)",
            boxShadow: "0 15px 35px rgba(15,23,42,0.25)"
          }}
        >
          <h1 className="fw-bold display-5">Welcome to ShopEZ</h1>
          <p className="lead mt-3">
            Premium products, best prices, and effortless shopping.
          </p>

          <Link to="/products" className="btn btn-warning btn-lg mt-3">
            Shop Now
          </Link>
        </div>

        <h2 className="fw-bold mb-4">Featured Products</h2>

        <div className="row">
          {products.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>
              <div
                className="card h-100 border-0 rounded-4"
                style={{
                  boxShadow: "0 8px 25px rgba(15,23,42,0.12)"
                }}
              >
                <img
                  src={item.mainImg}
                  alt={item.title}
                  className="card-img-top rounded-top-4"
                  style={{
                    height: "240px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                  <h4 className="text-primary">₹{item.price}</h4>

                  <Link
                    to={`/product/${item._id}`}
                    className="btn btn-dark w-100 mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 text-center">
          <div className="col-md-3">
            <h4>🚚</h4>
            <h6>Fast Delivery</h6>
          </div>
          <div className="col-md-3">
            <h4>🔒</h4>
            <h6>Secure Shopping</h6>
          </div>
          <div className="col-md-3">
            <h4>💰</h4>
            <h6>Best Deals</h6>
          </div>
          <div className="col-md-3">
            <h4>⭐</h4>
            <h6>Trusted Products</h6>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;