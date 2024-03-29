import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
