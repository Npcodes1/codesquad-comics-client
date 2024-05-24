import React from "react";

const Login = () => {
  return (
    <div>
      <main className="main-container bg-gradient">
        <div className="comics-container">
          <form className="form" action="#">
            <h1 className="h1-title">LOGIN</h1>
            <div className="form-fields">
              <div className="form-details">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-details">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
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
