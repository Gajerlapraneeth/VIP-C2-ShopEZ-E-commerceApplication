import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  useEffect(() => {

    const fetchProduct = async () => {

      const res =
        await API.get(`/products/${id}`);

      setProduct(res.data);

    };

    fetchProduct();

  }, [id]);

  const addToCart = () => {

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

  if (!product) {

    return <h2>Loading...</h2>;

  }

  return (

    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white"
      }}
    >

      <div
        className="card p-4 mx-auto"
        style={{
          maxWidth: "900px"
        }}
      >

        <img
          src={product.mainImg}
          alt={product.title}
          style={{
            height: "400px",
            objectFit: "cover"
          }}
        />

        <h2 className="mt-4">
          {product.title}
        </h2>

        <p>
          {product.description}
        </p>

        <h3>
          ₹{product.price}
        </h3>

        <div className="mt-3">

          <button
            className="btn btn-success me-2"
            onClick={addToCart}
          >
            Add To Cart
          </button>

          <a
            href="/cart"
            className="btn btn-warning"
          >
            Go To Cart
          </a>

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;