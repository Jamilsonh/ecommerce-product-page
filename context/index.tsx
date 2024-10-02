import { createContext } from 'react';

interface StoreContextType {
  cartItems: Array<{
    name: string;
    price: number;
    quantity: number;
    img: string;
  }>;
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleIncrease: () => void;
  handleDecrease: () => void;
  addToCart: () => void;
  cleanCart: () => void;
}

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);
