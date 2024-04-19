import React from "react";
import css from "./authLayout.module.css";
import { NavLink, Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <>
      <header>
        <nav className="container">
          <ul className="menu">
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            <li>
              <NavLink activeClassName={css.activeNav} to="/auth/login">
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={css.activeNav} to="/auth/register">
                Register
              </NavLink>
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

export default AuthLayout;
