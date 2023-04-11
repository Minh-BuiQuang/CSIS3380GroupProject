import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryNav from './CategoryNav';
import Product from './Product';

export default function Category (props) {
  const[products, setProducts] = useState([])
  useEffect(() => {
    const url = 'https://csis3380-group-9-backend.onrender.com/products'
    axios.get(url)
    .then((res) => {
        setProducts(res.data.sort((a, b) => b.year - a.year))
        if(props.title !== 'New Arrival'){
          setProducts(res.data.filter(p =>p.gender === props.title))
        }
    })
    .catch(err => {
      console.log(err)
    })
  },[])
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