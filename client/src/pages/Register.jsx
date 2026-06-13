import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        formData
      );

      alert(res.data.message);

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card p-4">

            <h2 className="text-center mb-4">
              Register
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <button
                className="btn btn-primary w-100"
              >
                Register
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;