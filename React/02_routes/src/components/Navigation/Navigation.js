import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"; // импортируем CSS-модуль

function Navigation() {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/Book" className={css.navLink}>
              Book
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/About" className={css.navLink}>
              About
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/Contact" className={css.navLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
