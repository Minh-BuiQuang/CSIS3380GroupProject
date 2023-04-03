import React, { men } from 'react';
import React, { Component } from 'react';
import CategoryNav from './CategoryNav';
import Product from './Product';
import { Link } from 'react-router-dom';




class Category extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showMenList: false,
      };
      this.handleMenListClick = this.handleMenListClick.bind(this);
    }
    handleMenListClick() {
        this.setState({ showMenList: true });
      }

      render() {
        const { showMenList } = this.state;
        return (
            <div className="main-content home">
              <CategoryNav onMenListClick={this.handleMenListClick}/>
              <div className="product-container">
              {showMenList ? (
              <div className="product-box men">
              <h3>MEN</h3>
              <div className="image-container">
                <img src="img/man1.jpg" alt="men products" />
                <img src="img/man2.jpg" alt="men products" />
                <img src="img/man3.jpg" alt="men products" />
              </div>
              <Link to="/men"><button className="view-more-btn">View More</button></Link>
            </div>
              ):(
                <Product onMenListClick={this.handleMenListClick}/>
              
               )
              }</div>
            </div>
        );
         }
}
export default Category;
   
