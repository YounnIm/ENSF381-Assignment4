import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <img src={item.product.image} alt={item.product.name} />
      <h2>{item.product.name}</h2>
      <p>${item.product.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${(item.quantity * item.product.price).toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.product)}>Remove</button>
    </div>
  );
}

export default CartItem