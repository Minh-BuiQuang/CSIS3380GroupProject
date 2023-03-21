import React, { Component } from 'react';
import CategoryNav from './CategoryNav'
import Product from './Product'

class Category extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <CategoryNav/>
        <Product/>
      </div>
    );
  }
}

export default Category;