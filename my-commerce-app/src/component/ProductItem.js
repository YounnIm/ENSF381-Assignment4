// ProductItem.js
import React, { useState } from 'react';

function ProductItem({ product, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div>
    <img style={{ width: '300px', height: 'auto' }} src={product.image} alt={product.name} />
    <h2 onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
    {product.name}
    </h2>
    {showDetails && <p>{product.description}</p>}
    <p>${product.price.toFixed(2)}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem