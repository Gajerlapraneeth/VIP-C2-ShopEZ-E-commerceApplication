import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const res = await API.get("/products");

      setProducts(res.data);

    };

    fetchProducts();

  }, []);

  const addToCart = (product) => {

    let cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    cart.push({
      ...product,
      quantity: 1
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added To Cart");

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        All Products
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
                className="card-img-top"
                height="250"
                alt={item.title}
              />

              <div className="card-body">

                <h5>{item.title}</h5>

                <p>{item.description}</p>

                <h4>₹{item.price}</h4>

                <button
                  className="btn btn-primary me-2"
                  onClick={() =>
                    addToCart(item)
                  }
                >
                  Add To Cart
                </button>

                <Link
                  to={`/product/${item._id}`}
                  className="btn btn-dark"
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

export default Products;