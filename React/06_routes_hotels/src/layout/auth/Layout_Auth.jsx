import React from "react";
import css from "./Layout_Auth.module.css";
import { Link, Outlet } from "react-router-dom";
function Layout_Auth() {
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

export default Layout_Auth;
