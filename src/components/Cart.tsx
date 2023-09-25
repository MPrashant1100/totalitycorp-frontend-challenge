import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div>
                <p>{item.name}</p>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg">${cartTotal.toFixed(2)}</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
