import React, { woman} from 'react';
import React, { Component } from 'react';
import CategoryNav from './CategoryNav';
import Product from './Product';
import { Link } from 'react-router-dom';




class Category extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showWomanList: false,
      };
      this.handleWomanListClick = this.handleWomanListClick.bind(this);
    }
    handleMenListClick() {
        this.setState({ showWomanList: true });
      }

      render() {
        const { showWomanList } = this.state;
        return (
            <div className="main-content home">
              <CategoryNav onWomanListClick={this.handleWomanListClick}/>
              <div className="product-container">
              {showWomanList ? (
              <div className="product-box men">
              <h3>Woman</h3>
              <div className="image-container">
                <img src="img/woman1.jpg" alt="women products" />
                <img src="img/woman2.jpg" alt="women products" />
                <img src="img/woman3.jpg" alt="women products" />
              </div>
              <Link to="/woman"><button className="view-more-btn">View More</button></Link>
            </div>
              ):(
                <Product onWomanListClick={this.handleWomanListClick}/>
              
               )
              }</div>
            </div>
        );
         }
}
export default Category;