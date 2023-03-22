import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Todo: Add clothing card dynamically
const Product = () => (
  <ul className="product-list">
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
    <li><Card/></li>
  </ul>   
);

//Todo: Load clothing data into card
class Card extends React.Component {
    render() {
      return (
        <div className="card-container">
          <div className="card">
            <div>
              {/* <img src={this.props.url} alt={this.props.name} /> */}
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