import React, { kids} from 'react';
import React, { Component } from 'react';
import CategoryNav from './CategoryNav';
import Product from './Product';
import { Link } from 'react-router-dom';




class Category extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showKidsList: false,
      };
      this.handleKidsListClick = this.handleKIDSListClick.bind(this);
    }
    handleMenListClick() {
        this.setState({ showKidsList: true });
      }

      render() {
        const { showWomanList } = this.state;
        return (
            <div className="main-content home">
              <CategoryNav onKidsListClick={this.handleKidsListClick}/>
              <div className="product-container">
              {showKidList ? (
              <div className="product-box kids">
              <h3>Woman</h3>
              <div className="image-container">
                 <img src="img/kids-t-shirt.jpg" alt="kids products" />
                  <img src="img/kids-jacket.jpg" alt="kids products" />
                  <img src="img/plaid-shirt-for-kids.jpg" alt="kids products" />
              </div>
              <Link to="/kids"><button className="view-more-btn">View More</button></Link>
            </div>
              ):(
                <Product onKidsListClick={this.handleKidListClick}/>
              
               )
              }</div>
            </div>
        );
         }
}
export default Category;
   