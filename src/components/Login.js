import React from "react";

const Login = ({ user, setUser }) => {
  const handleLoginForm = (e) => {
    //prevent default behavior of form
    e.preventDefault();
    //printing message the method ran
    console.log("This method ran!");
    //print the value of each input using name attribute
    console.log(e.target.email.value);
    console.log(e.target.password.value);
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
