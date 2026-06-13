import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const res = await API.get("/products");

      setProducts(res.data);

    };

    fetchProducts();

  }, []);

  return (

    <div className="container mt-4">

      <div className="bg-dark text-white p-5 rounded text-center mb-5">

        <h1>Welcome to ShopEZ</h1>

        <h3>Big Sale Up To 50% Off</h3>

        <Link
          to="/products"
          className="btn btn-warning mt-3"
        >
          Shop Now
        </Link>

      </div>

      <h2 className="mb-4">
        Featured Products
      </h2>

      <div className="row">

        {products.map((item) => (

          <div
            className="col-md-4 mb-4"
            key={item._id}
          >

            <div className="card h-100">

              <img
                src={item.mainImg}
                alt={item.title}
                height="250"
                className="card-img-top"
              />

              <div className="card-body">

                <h5>{item.title}</h5>

                <p>{item.description}</p>

                <h4>₹{item.price}</h4>

                <Link
                  to={`/product/${item._id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Home;