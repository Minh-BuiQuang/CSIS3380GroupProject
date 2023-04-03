import React, { Component } from 'react';
import Category from './Category';
import CategoryNav from './CategoryNav'
import Product from './Product'

class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <CategoryNav/>
        <Product/>
        <Product/>
        <Product/>
        
      </div>
    );
  }
}

export default Home;