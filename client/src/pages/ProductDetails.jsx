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

  if (!product) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="container mt-5">

      <div className="card p-4">

        <img
          src={product.mainImg}
          alt={product.title}
          height="400"
        />

        <h2 className="mt-3">
          {product.title}
        </h2>

        <p>
          {product.description}
        </p>

        <h3>
          ₹{product.price}
        </h3>

      </div>

    </div>

  );

}

export default ProductDetails;