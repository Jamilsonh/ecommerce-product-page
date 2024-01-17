import React from 'react';
import { Container } from './styles';
import LeftBody from './LeftBody';
import RightBody from './RightBody';

export default function Body() {
  return (
    <Container>
      <LeftBody />
      <RightBody />
    </Container>
  );
}
