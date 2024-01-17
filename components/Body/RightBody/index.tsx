import React from 'react';
import { Container, ContainerPrice } from './styles';

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
    </Container>
  );
}
