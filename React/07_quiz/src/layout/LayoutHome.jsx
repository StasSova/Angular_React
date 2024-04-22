import React from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./LayoutHome.module.css";

function LayoutHome() {
  return (
    <>
      <header>
        <nav className={css.container}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth/login">Auth</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default LayoutHome;
