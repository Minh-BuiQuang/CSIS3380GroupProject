import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import MyCart from './MyCart';
import Home from './Home';
import NotFound from './NotFound';
import Category from './Category';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity++;
      setCartItems(newCartItems);
    }
  };

  const handleRemoveFromCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1 && cartItems[index].quantity === 1) {
      const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(newCartItems);
    } else if (index !== -1 && cartItems[index].quantity > 1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity--;
      setCartItems(newCartItems);
    }
  };

  return (
    <div className="App container">
      <Header cartCount={cartItems.length} />
      <Routes forceRefresh={true}>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/mycart" element={<MyCart title="My Cart" cartItems={cartItems}  handleRemoveFromCart={handleRemoveFromCart}/>} />
        <Route path="/new" element={<Category title="New Arrival" handleAddToCart={handleAddToCart} />} />
        <Route path="/unisex" element={<Category title="Unisex" handleAddToCart={handleAddToCart} />} />
        <Route path="/men" element={<Category title="Men" handleAddToCart={handleAddToCart} />} />
        <Route path="/women" element={<Category title="Women" handleAddToCart={handleAddToCart} />} />
        <Route path="/girls" element={<Category title="Girls" handleAddToCart={handleAddToCart} />} />
        <Route path="/boys" element={<Category title="Boys" handleAddToCart={handleAddToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
