import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CategoryNav = ({ onNewArrivalClick }) => (
  <ul className="category-nav">
    <li><NavLink to="/new" onClick={onNewArrivalClick}>New Arrival</NavLink></li>
    <li><NavLink to="/men">Men</NavLink></li>
    <li><NavLink to="/women">Women</NavLink></li>
    <li><NavLink to="/kids">Kids</NavLink></li>
  </ul>   
);

export default CategoryNav;