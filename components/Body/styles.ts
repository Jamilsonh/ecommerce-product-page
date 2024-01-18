import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
