'use client';

import { useState } from 'react';
import { StoreContext } from '@/context';

import ImageProduct from '@/public/image-product-1-thumbnail.jpg';

export default function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const newItem = {
      name: 'Fall Limited Edition Sneakers',
      price: 125.0,
      quantity: quantity,
      img: '/image-product-1-thumbnail.jpg',
    };
    setCartItems([...cartItems, newItem]);
    setQuantity(0);
  };

  const cleanCart = () => {
    setCartItems([]);
    setQuantity(0);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        quantity,
        setQuantity,
        handleIncrease,
        handleDecrease,
        addToCart,
        cleanCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
