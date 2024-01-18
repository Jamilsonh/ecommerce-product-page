import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  min-height: 450px;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    color: hsl(26, 100%, 55%);
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-weight: 400;
    line-height: 1.5rem;
    color: hsl(219, 9%, 45%);
  }

  h4 {
    color: hsl(219, 9%, 45%);
    font-weight: 400;
    text-decoration: line-through;
  }

  @media (max-width: 768px) {
    width: 80%;
    justify-content: space-around;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    color: hsl(26, 100%, 55%);
    letter-spacing: 1px;
    background-color: hsla(26, 100%, 55%, 0.158);
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerAmountItens = styled.div`
  width: 10rem;
  padding: 0.8rem 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  background-color: var(--LightGrayishBlue);

  h3 {
    color: black;
  }
`;

export const ButtonAddToCart = styled.div`
  display: flex;
  padding: 1rem 4rem;
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

  img {
  }
`;
