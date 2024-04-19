import React from "react";
import css from "./Layout_Admin.module.css";
import { Link, Outlet } from "react-router-dom";

function Layout_Admin() {
  return (
    <>
      <header>
        <nav className={css.container}>
          <ul>
            <li>
              <Link to="/">Home</Link>
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

export default Layout_Admin;
