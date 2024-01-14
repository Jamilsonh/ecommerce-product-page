import React from 'react';
import {
  Container,
  ContainerIcon,
  ContainerLeft,
  ContainerMiddle,
  ContainerRight,
} from './styles';
import Image from 'next/image';

export default function Header() {
  return (
    <Container>
      <ContainerLeft>
        <Image src='logo.svg' width='200' height='50' alt='logo' />
      </ContainerLeft>
      <ContainerMiddle>
        <a>Collections</a>
        <a>Men</a>
        <a>Women</a>
        <a>About</a>
        <a>Contat</a>
      </ContainerMiddle>
      <ContainerRight>
        <Image src='icon-cart.svg' width='30' height='30' alt='logo' />
        <ContainerIcon>
          <Image src='/image-avatar.png' width='30' height='30' alt='logo' />
        </ContainerIcon>
      </ContainerRight>
    </Container>
  );
}
