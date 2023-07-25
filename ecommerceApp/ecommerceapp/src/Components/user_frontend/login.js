import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
