import React from "react";
import css from "./LayoutAuth.module.css";
import { Link, Outlet } from "react-router-dom";
function LayoutAuth() {
  return (
    <>
      <header>
        <nav className={css.container}>
          <ul>
            <li>
              <Link activeClassName={css.activeNav} to="/auth/login">
                Log in
              </Link>
            </li>
            <li>
              <Link activeClassName={css.activeNav} to="/auth/register">
                Register
              </Link>
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

export default LayoutAuth;
