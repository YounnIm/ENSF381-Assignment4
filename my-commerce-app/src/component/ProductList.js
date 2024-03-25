import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';

function ProductList({ addToCart }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList