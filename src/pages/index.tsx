import React, { useState } from 'react';
import Head from 'next/head';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import { products } from '@/contants';

const Home = () => {
  const [cart, setCart] = useState<any>();

  const addToCart = (productId: string) => {
    const product = products.find((product) => product.id === productId)
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: any) => {
    const updatedCart = cart.filter((item:any) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <Head>
        <title>E-commerce Store</title>
      </Head>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold mb-8 text-primary flex justify-center items-center">Welcome to my E-commerce Store</h1>
        <div className="flex">
          <div className="w-3/4 pr-4">
            <ProductList cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
          </div>
          <div className="w-1/4">
            <Cart cart={cart} removeFromCart={removeFromCart} />
            <Checkout cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
