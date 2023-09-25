import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="p-4 border rounded shadow">
     <Image src={product.image} alt={product.title} width={96} height={96}/>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-900 mt-2">${product.price.toFixed(2)}</p>
      {isInCart ? (
        <button
          className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
