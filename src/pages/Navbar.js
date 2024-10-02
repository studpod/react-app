import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <nav className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
        <button onClick={toggleTheme}>
        Перемкнути на {theme === 'light' ? 'темну' : 'світлу'} тему
      </button>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
