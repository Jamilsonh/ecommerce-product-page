import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  border-bottom: 1px solid var(--GrayishBlue);
  margin: 0 auto;
  height: 100px;
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
    display: block;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
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
      bottom: -40px; /* Ajuste esta distância para controlar o quão longe a borda está do item do menu */
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
  }
`;

export const ContainerRight = styled.div`
  width: 30%;
  max-width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

  @media (max-width: 768px) {
    width: 30px;
    border: none;
  }
`;
