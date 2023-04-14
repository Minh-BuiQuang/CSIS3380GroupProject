import React from 'react';

const MyCart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCompleteOrder = () => {
    // TODO: update the stock numbers and show a message to the user
  };

  return (
    <div className="main-content mycart">
      <h1>My Cart</h1>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.name}</p>
                  <img src={item.link} alt={item.name} />
                </td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>Total:</td>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <button onClick={handleCompleteOrder}>Complete Order</button>
      )}
    </div>
  );
};

export default MyCart;
