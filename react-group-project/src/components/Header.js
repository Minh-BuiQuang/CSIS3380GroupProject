import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [cartCount, setCartCount] = useState(0); // initialize the cart count to 0
  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // increment the cart count when an item is added
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1); // decrement the cart count when an item is removed
    }
  };

  return (
    <header>
      <span className="icn-logo">
        <img class="logo" src="img/SHOP.png" alt="SHOP logo" />
      </span>
      <ul className="main-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/mycart">My Cart</NavLink>
          <div id="cart-logo">{cartCount}</div> {/* add the cart logo */}
        </li>
      </ul>
      <img class="banner" src="img/banner.jpg" alt="banner" />
      <button onClick={handleAddToCart}>Add to Cart</button> {/* add an "Add to Cart" button */}
      <button onClick={handleRemoveFromCart}>Remove from Cart</button> {/* add a "Remove from Cart" button */}
    </header>
  );
};

export default Header;
