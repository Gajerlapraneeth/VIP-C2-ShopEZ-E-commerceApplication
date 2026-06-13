import { useEffect, useState } from "react";
import API from "../services/api";

function AdminProducts() {

  const [products, setProducts] =
    useState([]);

  const token =
    localStorage.getItem("token");

  const fetchProducts = async () => {

    const res =
      await API.get("/products");

    setProducts(res.data);

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  const deleteProduct =
    async (id) => {

      try {

        await API.delete(
          `/products/${id}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

        alert(
          "Product Deleted"
        );

        fetchProducts();

      } catch (error) {

        alert(
          "Delete Failed"
        );

      }

    };

  return (

    <div className="container mt-5">

      <h2>
        Admin Product Management
      </h2>

      <hr />

      {products.map((item) => (

        <div
          key={item._id}
          className="card p-3 mb-3"
        >

          <div className="d-flex justify-content-between">

            <div>

              <h5>
                {item.title}
              </h5>

              <p>
                ₹{item.price}
              </p>

            </div>

            <button
              className="btn btn-danger"
              onClick={() =>
                deleteProduct(
                  item._id
                )
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );

}

export default AdminProducts;