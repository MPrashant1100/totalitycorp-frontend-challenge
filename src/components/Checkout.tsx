import React, { useState } from 'react';

const Checkout = ({ cart }:any) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleShippingInfoChange = (e:any) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handlePaymentInfoChange = (e:any) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    console.log('Shipping Info:', shippingInfo);
    console.log('Payment Info:', paymentInfo);
    console.log('Cart:', cart);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
        <input
          type="text"
          name="name"
          value={shippingInfo.name}
          onChange={handleShippingInfoChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={shippingInfo.address}
          onChange={handleShippingInfoChange}
          placeholder="Address"
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="text"
          name="city"
          value={shippingInfo.city}
          onChange={handleShippingInfoChange}
          placeholder="City"
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="text"
          name="zip"
          value={shippingInfo.zip}
          onChange={handleShippingInfoChange}
          placeholder="ZIP Code"
          className="w-full p-2 border rounded mt-2"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentInfoChange}
          placeholder="Card Number"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="expirationDate"
          value={paymentInfo.expirationDate}
          onChange={handlePaymentInfoChange}
          placeholder="Expiration Date"
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="text"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handlePaymentInfoChange}
          placeholder="CVV"
          className="w-full p-2 border rounded mt-2"
        />
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleCheckout}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
