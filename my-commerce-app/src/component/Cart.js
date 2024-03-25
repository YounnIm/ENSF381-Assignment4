import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, removeFromCart }) {
  const totalCost = cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  return (
    <div style={{ marginLeft: '1000px' }}>
    <h2>Shopping Cart</h2>
    {cartItems.map(item => (
      <CartItem key={item.product.id} item={item} removeFromCart={removeFromCart} />
    ))}
    <p>Total Cost: ${totalCost.toFixed(2)}</p>
    </div>
  );
}

export default Cart