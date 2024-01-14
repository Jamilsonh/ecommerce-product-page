import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  border-bottom: 1px solid black;
  margin: 0 auto;
  height: 150px;
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
  width: 1200px;
  border: 1px solid black;
  gap: 30px;
  display: flex;
  align-items: center;
  position: relative;
  height: 100px;

  a {
    position: relative; /* Isso permite posicionar o pseudo-elemento em relação a este link */
    text-decoration: none;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -60px; /* Ajuste esta distância para controlar o quão longe a borda está do item do menu */
      width: 100%;
      height: 5px; /* Altura da borda */
      background-color: transparent; /* Cor de fundo inicial (transparente) */
      transition: background-color 0.3s; /* Animação suave para mudança de cor */
    }

    &:hover::after {
      background-color: black; /* A cor da borda que aparecerá ao passar o mouse */
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
  width: 200px;
  border: 1px solid black;
`;

export const ContainerRight = styled.div`
  width: 20%;
  max-width: 150px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

export const ContainerIcon = styled.div`
  border-radius: 50%;
  border: 1px solid black;
`;
