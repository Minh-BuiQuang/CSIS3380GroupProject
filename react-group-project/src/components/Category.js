import React from 'react';
import { useState, useEffect } from 'react';
import CategoryNav from './CategoryNav';
import Product from './Product';

export default function Category (props) {
  const[products, setProducts] = useState([])
  useEffect(() => {   
    let filteredProducts = props.filteredProducts.sort((a, b) => b.year - a.year)
    if(props.title !== 'New Arrival'){
      filteredProducts = props.filteredProducts.filter(p =>p.gender === props.title)
    }
    setProducts(filteredProducts)
  },[products, props.filteredProducts, props.title])
  return (
    <div className="main-content home">
      <CategoryNav/>
      <div className="product-container">
        {(
          <div>
            <Product products={products}/>
          </div>
        )}
      </div>
    </div>
  );
}