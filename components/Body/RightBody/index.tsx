import React from 'react';
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

export default function RightBody() {
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
          <Image src={iconMinus} width='12' height='4' alt={'minus'} />
          <h3>0</h3>
          <Image src={iconPlus} width='12' height='12' alt={'plus'} />
        </ContainerAmountItens>
        <ButtonAddToCart>
          <Image src={iconCartWhite} width='18' height='16' alt={'cart'} />
          <h3>Add to cart</h3>
        </ButtonAddToCart>
      </ContainerButton>
    </Container>
  );
}
