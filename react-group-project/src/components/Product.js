import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleAddToCart() {
    this.setState({ cartCount: this.state.cartCount + 1 });
  }

  handleRemoveFromCart() {
    if (this.state.cartCount > 0) {
      this.setState({ cartCount: this.state.cartCount - 1 });
    }
  }
  

  render() {
    return (
      <ul className="product-list">
        {this.props.products.map((p) => {
          return (
            <li key={p._id}>
              <Item
                name={p.productDisplayName}
                link={p.link}
                type={p.articleType}
                color={p.baseColour}
                id={p.id}
                masterCategory={p.masterCategory}
                price={p.price}
                stock={p.stock}
                year={p.year}
                cartCount={this.state.cartCount} // pass cartCount as a prop
                handleAddToCart={this.handleAddToCart}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

class Item extends React.Component {
  render() {
    const { handleAddToCart, handleRemoveFromCart } = this.props;
    return (
      <div className="item-container">
        <div className="item">
          <img className="item-image" src={this.props.link} alt="Item" />
          <h2>{this.props.name}</h2>
          <ul className="item-list">
            <li>
              <strong>Price:</strong> ${this.props.price}
            </li>
            <li>
              <strong>Stock:</strong> {this.props.stock}
            </li>
            <li>
              <strong>Year:</strong> {this.props.year}
            </li>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
          </ul>
        </div>
      </div>
    );
  }
}
