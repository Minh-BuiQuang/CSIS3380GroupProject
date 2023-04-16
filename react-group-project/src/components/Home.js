import React from 'react';
import CategoryNav from './CategoryNav'
import Product from './Product'
import { useState } from 'react';


export default function Home(props) {
  const [ setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems((prevcartItems) => [...prevcartItems, item]);
  }

  return (
    <div className="main-content home">
      <CategoryNav />
      <h1 className='category-name'>New Arrival</h1>
      <Product products={props.filteredProducts.slice(0, 6)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Unisex</h1>
      <Product products={props.filteredProducts.filter(p => p.gender === 'Unisex').slice(0, 6)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Men</h1>
      <Product products={props.filteredProducts.filter(p => p.gender === 'Men').slice(0, 6)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Women</h1>
      <Product products={props.filteredProducts.filter(p => p.gender === 'Women').slice(0, 6)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Girls</h1>
      <Product products={props.filteredProducts.filter(p => p.gender === 'Girls').slice(0, 6)} handleAddToCart={handleAddToCart} />
      <h1 className='category-name'>Boys</h1>
      <Product products={props.filteredProducts.filter(p => p.gender === 'Boys').slice(0, 6)} handleAddToCart={handleAddToCart} />

    </div>
  );
}