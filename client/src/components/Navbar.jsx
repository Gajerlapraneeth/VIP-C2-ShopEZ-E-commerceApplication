import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out");

    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          ShopEZ
        </Link>

        <div>

          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/products">
            Products
          </Link>

          <Link className="btn btn-outline-light me-2" to="/profile">
            Profile
          </Link>

          <Link className="btn btn-outline-light me-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-outline-light me-2" to="/register">
            Register
          </Link>
          <Link
 className="btn btn-outline-light me-2"
 to="/cart"
>
 Cart
</Link>

<Link
 className="btn btn-warning me-2"
 to="/admin"
>
 Admin
</Link>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;