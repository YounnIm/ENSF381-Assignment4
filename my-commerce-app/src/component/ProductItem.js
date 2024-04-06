// ProductItem.js
import React, { useState } from 'react';

function ProductItem({ product, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);
  
  // Import the image from the public/images directory
  const imageUrl = process.env.PUBLIC_URL + '/' + product.image;

  return (
    <div>
      <img style={{ width: '300px', height: 'auto' }} src={imageUrl} alt={product.name} />
      <h2 onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
        {product.name}
      </h2>
      {showDetails && <p>{product.description}</p>}
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;