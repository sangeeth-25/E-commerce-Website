// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if item already exists
    const exists = cartItems.find((i) => i.id === item.id);

    if (exists) {
      toast.error('Item already in cart'); // ✅
      return;
    }
    if (!exists) {
      setCartItems([...cartItems, item]);
      toast.success('Item added to cart');
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook for easy access
export const useCart = () => useContext(CartContext);
