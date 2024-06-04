import React from "react";

const Signup = ({ user, setUser }) => {
  const handleSignupForm = (e) => {
    console.log("This method ran!");
    setUser(e.target.value);
    console.log("user input: ", user);
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
