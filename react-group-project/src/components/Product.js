import React, { useState } from 'react';

export default function Product(props) {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === id);
    if (index === -1) {
      setCartItems([...cartItems, { id: id, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity++;
      setCartItems(newCartItems);
    }
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = (id) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1 && cartItems[index].quantity === 1) {
      const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
      setCartItems(newCartItems);
    } else if (index !== -1 && cartItems[index].quantity > 1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity--;
      setCartItems(newCartItems);
    }
    setCartCount(cartCount - 1);
  };

  return (
    <ul className="product-list">
      {props.products.map((p) => {
        return (
          <li key={p._id}>
            <Item
              id={p._id}
              name={p.productDisplayName}
              link={p.link}
              type={p.articleType}
              color={p.baseColour}
              masterCategory={p.masterCategory}
              price={p.price}
              stock={p.stock}
              year={p.year}
              cartCount={cartItems.filter((item) => item.id === p._id).reduce((total, item) => total + item.quantity, 0)}
              handleAddToCart={() => handleAddToCart(p._id)}
              handleRemoveFromCart={() => handleRemoveFromCart(p._id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Item(props) {
  return (
    <div className="item-container">
      <div className="item">
        <img className="item-image" src={props.link} alt="Item" />
        <h2>{props.name}</h2>
        <ul className="item-list">
          <li>
            <strong>Price:</strong> ${props.price}
          </li>
          <li>
            <strong>Stock:</strong> {props.stock}
          </li>
          <li>
            <strong>Year:</strong> {props.year}
          </li>
          <li>
            <strong>Quantity:</strong> {props.cartCount}
          </li>
          <button onClick={props.handleAddToCart}>+</button>
          <button onClick={props.handleRemoveFromCart}>-</button>
        </ul>
      </div>
    </div>
  );
}
