import { useState, useEffect } from 'react';
import axios from 'axios';
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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://csis3380-group-9-backend.onrender.com/products')
      .then((res) => {
        setProducts(res.data.sort((a, b) => b.year - a.year))
        console.log("Retrieved " + res.data.length )
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products)
  }, [products]);

  function handleSearch(e) {
    let results = products.filter(p => p.productDisplayName.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log("filtered product count " + results.length)
    setFilteredProducts(results)
  }
  return (
    <div className="App container">
      <Header cartCount={cartItems.length} />
      <input type="text" onChange={handleSearch} placeholder="Search products.."/>
      <Routes forceRefresh={true}>
        <Route path="/" element={<Home filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About title="About" filteredProducts={filteredProducts}/>} />
        <Route path="/mycart" element={<MyCart title="My Cart" filteredProducts={filteredProducts} cartItems={cartItems}  handleRemoveFromCart={handleRemoveFromCart}/>} />
        <Route path="/new" element={<Category title="New Arrival" filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="/unisex" element={<Category title="Unisex" filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="/men" element={<Category title="Men" filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="/women" element={<Category title="Women" filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="/girls" element={<Category title="Girls" filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="/boys" element={<Category title="Boys" filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
