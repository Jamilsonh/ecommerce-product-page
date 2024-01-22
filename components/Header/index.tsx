import React, { useContext, useState } from 'react';
import {
  CartContainer,
  Container,
  ContainerIcon,
  ContainerImageCart,
  ContainerLeft,
  ContainerMiddle,
  ContainerRight,
  MobileMenuButton,
} from './styles';
import Image from 'next/image';
import { StoreContext } from '@/context';

export default function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const { cartItems } = useContext(StoreContext);

  return (
    <Container>
      <MobileMenuButton>
        <Image
          src='icon-menu.svg'
          width={16}
          height={15}
          alt='logo'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
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
            width: '90%',
            height: 'auto',
          }}
        />
      </ContainerLeft>

      <ContainerMiddle>
        <a>Collections</a>
        <a>Men</a>
        <a>Women</a>
        <a>About</a>
        <a>Contact</a>
      </ContainerMiddle>
      <ContainerRight>
        <ContainerImageCart onClick={() => setIsCartVisible(!isCartVisible)}>
          <Image
            src='icon-cart.svg'
            width='26'
            height='24'
            alt='logo'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <CartContainer isVisible={isCartVisible}>
            <h3>Cart</h3>
            <div>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <li>{item.name}</li>
                  <li>R$ {item.quantity}</li>
                </div>
              ))}
            </div>
          </CartContainer>
        </ContainerImageCart>

        <ContainerIcon>
          <Image
            src='/image-avatar.png'
            width={22}
            height={22}
            alt='logo'
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </ContainerIcon>
      </ContainerRight>
    </Container>
  );
}
