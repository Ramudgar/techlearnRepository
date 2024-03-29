import axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
  // state to handle recaptcha
  const [isVerified, setIsVerified] = useState(false);
  function onChange(value) {
    // console.log("Captcha value:", value);
    setIsVerified(true);
  }

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
      .post("http://localhost:5000/user/register", data)
      .then((response) => {
        console.log(response.data);
        alert(`success: ${response.data.msg}`);

        setTimeout(() => {
          // Redirect to login after 1 seconds
          window.location.href = "/login";
        }, 1000);
      })
      .catch((err) => {
        alert(`Error: ${err.response.data.msg}`);
        console.log(err.response.data.msg);
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
          <ReCAPTCHA 
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
           onChange={onChange} />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!isVerified}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
