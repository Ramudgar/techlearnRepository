import axios from "axios";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      // username: username,
      password: password,
    };
    axios
      .post("http://localhost:3000/user/register", data)
      .then((response) => {
        console.log(response.data);
        alert(`success: ${response.data.msg}`);

        // Clear the form
        setEmail("");
        // setUsername("");
        setPassword("");
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // Extract the error message from the response data
          const errorMessage = err.response.data[0];
          alert(`Error: ${errorMessage}`);
        } else {
          // Error occurred before the request was made or no response was received
          alert("Sorry, something went wrong");
          console.log(err);
        }
      });
  };
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="inputText">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
