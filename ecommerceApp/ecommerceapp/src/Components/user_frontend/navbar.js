import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  // set the initial value of isLoggedIn state to false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true); // Set the isLoggedIn state to true if token exists
    } else {
      setIsLoggedIn(false); // Set the isLoggedIn state to false if token doesn't exist
    }
  }, []);

  // function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsLoggedIn(false); // Set the isLoggedIn state to false
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid text-light">
          <Link className="navbar-brand text-light" to="/">
            {isLoggedIn ? "Ecommerce App" : "Ecommerce App"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn && ( // Conditionally render the "Add Product" link
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/productform">
                    Add Product
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/productview">
                  Product
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ml-auto">
              {isLoggedIn ? (
                // Show logout link if logged in
                <li className="nav-item">
                  <Link
                    className="nav-link bg-danger mx-3 btn text-light btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                // Show login and signup links if not logged in
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/register">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
