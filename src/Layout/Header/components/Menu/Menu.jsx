import React from "react";
import style from "./style.module.css";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={style.menu}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button>
            <FaSearch />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
