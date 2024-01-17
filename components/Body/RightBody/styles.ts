import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  min-height: 300px;
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
