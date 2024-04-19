import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../login/login.module.css";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    navigate("/");
  };
  return (
    <div className={styles["form-container"]}>
      <h1 className={styles["form-title"]}>Register</h1>
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
          Have account <Link to="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
