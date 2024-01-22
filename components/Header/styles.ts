import styled from 'styled-components';

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

export const CartContainer = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  width: 350px; // Exemplo de largura
  height: 230px;
  top: 200%; // para aparecer logo abaixo do ícone do carrinho
  right: 50%; // inicia a partir do centro do ícone do carrinho
  transform: translateX(
    60%
  ); // ajusta para que o centro do container alinhe com o centro do ícone do carrinho
  z-index: 1;
  background-color: var(--White);
  box-shadow: black 0px 0px 10px;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  font-weight: 700;
  // ... (outros estilos, como sombra, cor de fundo etc.)
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
    width: 25px;
    border: none;
  }
`;
