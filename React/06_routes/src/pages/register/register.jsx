import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    navigate("/");
  };
  return (
    <>
      <h1>Register</h1>
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
          Have account? <Link to="/auth/login">Login</Link>
        </p>
      </form>
    </>
  );
}

export default Register;
