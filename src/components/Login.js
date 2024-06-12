import React from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLoginForm = (e) => {
    //prevent default behavior of form
    e.preventDefault();
    //printing message the method ran
    console.log("This method ran!");
    //print the value of each input using name attribute
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    //variable named "body" to create an object to hold the information about the book that is submitted from the form.
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch(`${url}/login/local`, {
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
          <form className="form" onSubmit={handleLoginForm}>
            <h1 className="h1-title">LOGIN</h1>
            <div className="form-fields">
              <div className="form-details">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

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

export default Login;
