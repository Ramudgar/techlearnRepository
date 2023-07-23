import { useState } from "react";
import hoster from "../../assets/images/hoster.jpeg";

function Homepage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  return (
    <>
      <div className="" style={{ width: "18rem" }}>
        <img src={hoster} alt="" />
      </div>
      <div className="container-fluid">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <h3>your email:{email}</h3>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <h3>your password:{password}</h3>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={(e) => setIsStudent(e.target.checked)}
            />
            <h3>Are you a student:{isStudent ? "Yes" : "No"}</h3>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Are you a student?
            </label>
          </div>
          <div className="dropdown p-3 m-2">
            <h3>gender:{gender}</h3>
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(e) => setGender(e.target.value)}
            >
              Gender
            </button>
            <ul className="dropdown-menu ">
              <li>Male</li>
              <li>Female</li>
              <li>Others</li>
            </ul>
          </div>

          <>
            <h5>Age groups</h5>
            <h3>Age group:{ageGroup}</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={(e) => setAgeGroup(e.target.value)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                18+
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
                onClick={(e) => setAgeGroup(e.target.value)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                18-
              </label>
            </div>
          </>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Homepage;
