import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  border: 1px solid black;
  margin: 0 auto;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ContainerMiddle = styled.nav`
  width: 1200px;
  border: 1px solid black;
  gap: 30px;
  display: flex;

  a {
    text-decoration: none;
    &:hover {
      background: #555;
      cursor: pointer;
    }
  }
`;

export const ContainerLeft = styled.div`
  width: 200px;
  border: 1px solid black;
`;

export const ContainerRight = styled.div`
  width: 150px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

export const ContainerIcon = styled.div`
  border-radius: 50%;
  border: 1px solid black;
`;
