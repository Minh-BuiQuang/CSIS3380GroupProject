import React, { Component } from 'react';
import CategoryNav from './CategoryNav';
import Product from './Product';
import { Link } from 'react-router-dom';


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewArrivalBoxes: false,
    };
    this.handleNewArrivalClick = this.handleNewArrivalClick.bind(this);
  }

  handleNewArrivalClick() {
    this.setState({ showNewArrivalBoxes: true });
  }

  render() {
    const { showNewArrivalBoxes } = this.state;
    return (
      <div className="main-content home">
        <CategoryNav onNewArrivalClick={this.handleNewArrivalClick} />
        <div className="product-container">
          {showNewArrivalBoxes ? (
            <>
              <div className="product-box men">
                <h3>MEN</h3>
                <div className="image-container">
                  <img src="img/man1.jpg" alt="men products" />
                  <img src="img/man2.jpg" alt="men products" />
                  <img src="img/man3.jpg" alt="men products" />
                </div>
                <Link to="/men"><button className="view-more-btn">View More</button></Link>
              </div>
              <div className="product-box women">
                <h3>WOMEN</h3>
                <div className="image-container">
                  <img src="img/woman1.jpg" alt="women products" />
                  <img src="img/woman2.jpg" alt="women products" />
                  <img src="img/woman3.jpg" alt="women products" />
                </div>
                <Link to="/women"><button className="view-more-btn">View More</button></Link>
              </div>
              <div className="product-box kids">
                <h3>KIDS</h3>
                <div className="image-container">
                  <img src="img/kids-t-shirt.jpg" alt="kids products" />
                  <img src="img/kids-jacket.jpg" alt="kids products" />
                  <img src="img/plaid-shirt-for-kids.jpg" alt="kids products" />
                </div>
                <Link to="/kids"><button className="view-more-btn">View More</button></Link>
              </div>
            </>
          ) : (
            <Product onNewArrivalClick={this.handleNewArrivalClick}/>
          )}
        </div>
      </div>
    );
  }
}

export default Category;