import styled from 'styled-components';

export const ContainerImage = styled.div`
  width: 500px;
  border-radius: 25px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const ContainerMenuImage = styled.div`
  width: 80%;
  display: flex;
  gap: 2rem;
  cursor: pointer;
  justify-content: space-between;
  margin-top: 1rem;

  img {
    border: 2px solid transparent;
    border-radius: 15px;
    &:hover {
      border-color: blue;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
