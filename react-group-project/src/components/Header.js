import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <span className="icn-logo">
        <img className="logo" src="img/SHOP.png" alt="SHOP logo" />
      </span>
      <ul className="main-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/mycart">My Cart ({props.cartCount})</NavLink>
        </li>
      </ul>
      <img className="banner" src="img/banner.jpg" alt="banner" />
    </header>
  );
};

export default Header;
