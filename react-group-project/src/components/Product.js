import React from 'react';


export default class Product extends React.Component {
  render(){
    return (
      <ul className="product-list">
        {this.props.products.map(p => {
          return (
            <li><Item
              key={p._id}
              name={p.productDisplayName}
              link={p.link}
              type={p.articleType}
              color={p.baseColour}
              id={p.id}
              masterCategory={p.masterCategory}
              price={p.price}
              stock={p.stock}
              year={p.year}
            /></li>
          )
        })}
      </ul>   
    )
  }
}
class Item extends React.Component {
    render() {
      return (
        <div className="item-container">
          <div className="item">
            <img class="item-image" src={this.props.link} alt="Item" />
            <h2>{this.props.name}</h2>
            <ul class='item-list'>
              <li><strong>Price:</strong> ${this.props.price}</li>
              <li><strong>Stock:</strong> {this.props.stock}</li>
              <li><strong>Year:</strong> {this.props.year}</li>
            </ul>
          </div>
        </div>
      )
    }
  }
