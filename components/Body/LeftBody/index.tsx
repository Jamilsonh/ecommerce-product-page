import Image from 'next/image';
import React from 'react';
import ImageGallery from './ImageGallery';
import { Container } from './styles';

export default function LeftBody() {
  return (
    <Container>
      <ImageGallery />
    </Container>
  );
}
