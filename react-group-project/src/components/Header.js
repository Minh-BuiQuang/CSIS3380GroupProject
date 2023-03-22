import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
     <span className="icn-logo">
    <img class="logo" src="img/SHOP.png" alt="SHOP logo"></img>    
    </span>
    <ul className="main-nav">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/mycart">My Cart</NavLink></li>
    </ul>
    <img class='banner' src="img/banner.jpg"></img>
  </header>
);

export default Header;