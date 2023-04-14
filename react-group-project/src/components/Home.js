import React from 'react';
import CategoryNav from './CategoryNav'
import Product from './Product'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home() {
  const [ setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems((prevcartItems) => [...prevcartItems, item]);
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://csis3380-group-9-backend.onrender.com/products')
      .then((res) => {
        setProducts(res.data.sort((a, b) => b.year - a.year))
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="main-content home">
      <CategoryNav />
      <h1 className='category-name'>New Arrival</h1>
      <Product products={products.slice(0, 4)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Unisex</h1>
      <Product products={products.filter(p => p.gender === 'Unisex').slice(0, 4)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Men</h1>
      <Product products={products.filter(p => p.gender === 'Men').slice(0, 4)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Women</h1>
      <Product products={products.filter(p => p.gender === 'Women').slice(0, 4)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Girls</h1>
      <Product products={products.filter(p => p.gender === 'Girls').slice(0, 4)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Boys</h1>
      <Product products={products.filter(p => p.gender === 'Boys').slice(0, 4)} handleAddToCart={handleAddToCart} />

    </div>
  );
}