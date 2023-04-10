import React from 'react';
//import { Link, NavLink } from 'react-router-dom';
//import { useState } from 'react';
import Product from './Product';

//Todo: Add clothing card dynamically

Product.map((product) => {
  const list = (
    <ul className="product-list">
          <li><Card/>Id: {product.id}</li>
          <li><Card/>Gender: {product.gender}</li>
          <li><Card/>MasterCategory: {product.masterCategory}</li>
          <li><Card/>SubCategory: {product.subCategory}</li>
          <li><Card/>ArticleType: {product.articleType}</li>
          <li><Card/>BaseColour: {product.baseColour}</li>
          <li><Card/>Season: {product.season}</li>
          <li><Card/>Year: {product.year}</li>
          <li><Card/>Usage: {product.usage}</li>
          <li><Card/>ProductDisplayName: {product.productDisplayName}</li>
          <li><Card/>Filename: {product.filename}</li>
          <li><Card/>Link: {product.link}</li>
          <li><Card/>Price: {product.price}</li>
          <li><Card/>Stock: {product.stock}</li>
</ul>
);
 return list; 
});
//Todo: Load clothing data into card
class Card extends React.Component {
    render() {
      return (
        <div className="card-container">
          <div className="card">
            <div>
              <img class="shirt" src="img/red-t-shirt.jpg" alt="Item" />
            </div>
            <h2>Red T-Shirt</h2>
            <p>A brightly-coloured shirt that is summer ready and eye-catching</p>
            {/* <h2>{this.props.name}</h2>
            <p>{this.props.desc}</p> */}
            <ul>
              {/* <li><strong>Diameter:</strong>{this.props.diameter}</li>
              <li><strong>Moons:</strong> {this.props.moons}</li> */}
              <li><strong>Price:</strong>$9.99</li>
              <li><strong>Stock:</strong> 10</li>
            </ul>
          </div>
        </div>
      )
    }
  }

export default Product;