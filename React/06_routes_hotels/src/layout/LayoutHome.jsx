import React from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./Layout_Home.module.css";

function LayoutHome() {
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

export default LayoutHome;
