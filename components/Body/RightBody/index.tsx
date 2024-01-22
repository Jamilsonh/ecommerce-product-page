import React, { useState } from 'react';
import {
  ButtonAddToCart,
  Container,
  ContainerAmountItens,
  ContainerButton,
  ContainerPrice,
} from './styles';
import Image from 'next/image';

import iconMinus from '@/public/icon-minus.svg';
import iconPlus from '@/public/icon-plus.svg';
import iconCartWhite from '@/public/icon-cart-White.svg';

import { useContext } from 'react';
import { StoreContext } from '@/context';

export default function RightBody() {
  const {
    handleIncrease,
    handleDecrease,
    addToCart,
    cleanCart,
    quantity,
    cartItems,
  } = useContext(StoreContext);

  /*
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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
      name: 'Product Name',
      quantity: quantity,
    };
    setCartItems([...cartItems, newItem]);
    setQuantity(0);
  };

  const CleanCart = () => {
    setCartItems([]);
    setQuantity(0);
  };

  */

  console.log(quantity);
  console.log(cartItems);

  return (
    <Container>
      <h3>SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <ContainerPrice>
        <h2>$125.00</h2>
        <h3>50%</h3>
      </ContainerPrice>
      <h4>$250.00</h4>

      <ContainerButton>
        <ContainerAmountItens>
          <Image
            src={iconMinus}
            width='12'
            height='4'
            alt={'minus'}
            onClick={handleDecrease}
          />
          <h3>{quantity}</h3>
          <Image
            src={iconPlus}
            width='12'
            height='12'
            alt={'plus'}
            onClick={handleIncrease}
          />
        </ContainerAmountItens>
        <ButtonAddToCart onClick={addToCart}>
          <Image src={iconCartWhite} width='18' height='16' alt={'cart'} />
          <h3>Add to cart</h3>
        </ButtonAddToCart>
        <button onClick={cleanCart}>Clear</button>
      </ContainerButton>
    </Container>
  );
}
