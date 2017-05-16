import React from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink className="btn" to="/signin">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
