// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price (assuming salary = price per item)
  const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.salary), 0);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="border-b py-4 flex justify-between">
                <span>
                  <strong>{item.title}</strong> - ₹{item.salary}
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="text-right text-xl font-semibold mb-6">
            Total: ₹{totalPrice}
          </div>

          {/* Pay Now Button */}
          <div className="flex justify-between">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
              onClick={() => alert('Payment successful!')} // replace with real logic later
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
