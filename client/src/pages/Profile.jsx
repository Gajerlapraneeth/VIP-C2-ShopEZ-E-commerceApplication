function Profile() {

  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return (
      <div className="container mt-5">
        <h2>Please Login First</h2>
      </div>
    );
  }

  const user = JSON.parse(storedUser);

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <h2>My Profile</h2>

        <hr />

        <h4>Username: {user.username}</h4>

        <h4>Email: {user.email}</h4>

        <h4>Role: {user.userType}</h4>

      </div>

    </div>
  );
}

export default Profile;