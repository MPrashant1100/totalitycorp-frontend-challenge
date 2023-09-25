import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../contants';

const ProductList = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cart.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
