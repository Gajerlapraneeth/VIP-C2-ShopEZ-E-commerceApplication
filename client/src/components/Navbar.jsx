import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged Out");
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg,#0F172A,#1E3A8A,#2563EB)"
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">
          ShopEZ
        </Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/products">
            Products
          </Link>

          <Link className="btn btn-outline-light me-2" to="/cart">
            Cart
          </Link>

          <Link className="btn btn-outline-light me-2" to="/orders">
            Orders
          </Link>

          {token && user?.userType === "admin" && (
            <Link className="btn btn-warning me-2" to="/admin">
              Admin Dashboard
            </Link>
          )}

          {token ? (
            <>
              <Link className="btn btn-outline-light me-2" to="/profile">
                Profile
              </Link>

              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-light me-2" to="/login">
                Login
              </Link>

              <Link className="btn btn-warning" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;