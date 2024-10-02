import styled from 'styled-components';

interface CartContainerProps {
  isVisible: boolean;
}

export const Container = styled.div`
  box-sizing: border-box;
  width: 90%;
  border-bottom: 1px solid var(--GrayishBlue);
  margin: 0 auto;
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  text-decoration: none;
  border: none;
  background-color: transparent;

  @media (max-width: 768px) {
    display: flex;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 40px;
    margin-bottom: -3px;
    align-items: center;
  }
`;

export const ContainerMiddle = styled.nav`
  max-width: 800px;
  width: 70%;
  gap: 30px;
  display: flex;
  align-items: center;
  position: relative;

  a {
    position: relative; /* Isso permite posicionar o pseudo-elemento em relação a este link */
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6.5vh; /* Ajuste esta distância para controlar o quão longe a borda está do item do menu */
      width: 100%;
      height: 5px; /* Altura da borda */
      background-color: transparent; /* Cor de fundo inicial (transparente) */
      transition: background-color 0.3s; /* Animação suave para mudança de cor */
    }

    &:hover::after {
      background-color: var(
        --Orange
      ); /* A cor da borda que aparecerá ao passar o mouse */
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerLeft = styled.div`
  max-width: 200px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: -25px;
  }
`;

export const ContainerRight = styled.div`
  width: 25%;
  max-width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerImageCart = styled.div`
  width: 35px; // Tamanho padrão para desktop
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media (max-width: 600px) {
    width: 22px;
  }
`;

export const CartContainer = styled.div<CartContainerProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  width: 350px;
  height: 250px;
  top: 200%;
  right: 50%;
  transform: translateX(60%);
  z-index: 1;
  background-color: var(--White);
  box-shadow: black 0px 0px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: 700;
  cursor: default;

  h3 {
    border-bottom: 4px solid var(--LightGrayishBlue);
    padding: 1.5rem 1rem;
  }
  // outros estilos...
`;

export const ContainerCart = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0;
  box-sizing: border-box;
`;

export const ContainerCartEmpty = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--DarkGrayishBlue);
  font-weight: 800;
`;

export const ContainerCartItems = styled.div`
  width: 90%;
  height: 25%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  h3 {
    font-size: 15px;
  }
`;

export const ContainerText = styled.div`
  color: var(--GrayishBlue);
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 1rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
  color: hsl(219, 9%, 45%);
  font-weight: 400;

  strong {
    color: black;
    font-weight: 800;
  }
`;

export const ContainerIcon = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid var(--Orange);
  width: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25px;
    border: none;
  }
`;

export const ButtonCheckout = styled.div`
  display: flex;
  padding: 1.25rem 7.5rem;
  border-radius: 10px;
  background-color: hsl(26, 100%, 55%);
  justify-content: center;
  color: var(--White);
  gap: 1rem;

  h3 {
    color: var(--White);
    font-weight: 400;
    width: 7rem;
  }
`;
