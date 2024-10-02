import React, { useContext, useState } from 'react';
import {
  ButtonCheckout,
  CartContainer,
  Container,
  ContainerCart,
  ContainerCartEmpty,
  ContainerCartItems,
  ContainerIcon,
  ContainerImageCart,
  ContainerLeft,
  ContainerMiddle,
  ContainerRight,
  ContainerText,
  MobileMenuButton,
} from './styles';
import Image from 'next/image';
import { StoreContext } from '@/context';
import IconDelete from '@/public/icon-delete.svg';

export default function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('StoreContext must be usesd within a StoreProvider');
  }

  const { cartItems, cleanCart, quantity } = context;

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
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p>{item.quantity}</p>
              </li>
            ))}
          </ul>
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
            {cartItems.length > 0 ? (
              <ContainerCart>
                {cartItems.map((item, index) => (
                  <ContainerCartItems key={index}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={50}
                      height={50}
                      style={{
                        width: '55px',
                        height: '55px',
                        borderRadius: '5px',
                      }}
                    />
                    <ContainerText>
                      <div>{item.name}</div>
                      <div>
                        ${item.price}.00 x {item.quantity}{' '}
                        <strong>${item.price * item.quantity}</strong>
                      </div>
                    </ContainerText>
                    <Image
                      src={IconDelete}
                      alt={'oi'}
                      width={50}
                      height={50}
                      style={{
                        width: '14px',
                        height: '16px',
                        cursor: 'pointer',
                      }}
                      onClick={cleanCart}
                    />
                  </ContainerCartItems>
                ))}
                <ButtonCheckout>Checkout</ButtonCheckout>
              </ContainerCart>
            ) : (
              <ContainerCartEmpty>Your cart is empty.</ContainerCartEmpty>
            )}
          </CartContainer>
        </ContainerImageCart>

        <ContainerIcon onClick={() => setIsCartVisible(!isCartVisible)}>
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
