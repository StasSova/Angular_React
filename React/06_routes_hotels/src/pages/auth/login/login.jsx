import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    navigate("/");
  };

  return (
    <div className={styles["form-container"]}>
      <h1 className={styles["form-title"]}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className={styles["form-submit-button"]}>
          Login
        </button>
        <p className={styles["form-footer"]}>
          No account <Link to="/auth/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
