import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
        <p>
          No account <Link to="/auth/register">Register</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
