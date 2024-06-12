import React from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

const Signup = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleSignupForm = (e) => {
    // e.preventDefault(); //to make sure the consoles worked.
    //printing message the method ran
    console.log("This method ran!");

    //variable named "body" to create an object to hold the information about the book that is submitted from the form.
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    //print the value of each input using name attribute
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.username.value);
    console.log(e.target.password.value);

    fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <main className="main-container bg-gradient">
        <div className="comics-container">
          <form className="form" onSubmit={handleSignupForm}>
            <h1 className="h1-title">SIGNUP</h1>
            <div className="form-fields">
              {/* First Name */}
              <div className="form-details">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="form-details">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              {/* Username */}
              <div className="form-details">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              {/* Password  */}
              <div className="form-details">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-submit">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
