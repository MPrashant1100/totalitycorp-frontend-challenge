import React, { useState } from 'react';
import ProductCard from './ProductCard';
import {  ProductCardsProps } from '@/interfaces';
import { products } from '@/contants';

const ProductList = ({ cart, addToCart, removeFromCart} : ProductCardsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product,index) => (
        <ProductCard
          key={index}
          {...product}       
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cart.some((item: any) => item.id === product.id)} />
      ))}
    </div>
    
  );
};

export default ProductList;
