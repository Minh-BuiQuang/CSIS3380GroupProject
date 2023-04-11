import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CategoryNav = ({ onNewArrivalClick }) => (
  <ul className="category-nav">
    <li><NavLink to="/new">New Arrival</NavLink></li>
    <li><NavLink to="/unisex">Unisex</NavLink></li>
    <li><NavLink to="/men">Men</NavLink></li>
    <li><NavLink to="/women">Women</NavLink></li>
    <li><NavLink to="/girls">Girls</NavLink></li>
    <li><NavLink to="/boys">Boys</NavLink></li>
  </ul>   
);

export default CategoryNav;