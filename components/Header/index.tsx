import React from 'react';
import {
  Container,
  ContainerIcon,
  ContainerLeft,
  ContainerMiddle,
  ContainerRight,
  MobileMenuButton,
} from './styles';
import Image from 'next/image';

export default function Header() {
  return (
    <Container>
      <MobileMenuButton>
        <Image
          src='icon-menu.svg'
          width={16}
          height={15}
          alt='logo'
          sizes='100vw'
          onClick={() => setMenuIsVisible(true)}
        />
      </MobileMenuButton>
      <ContainerLeft>
        <Image
          width={138}
          height={20}
          src='logo.svg'
          alt='logo'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
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
