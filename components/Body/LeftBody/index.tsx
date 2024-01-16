import Image from 'next/image';
import React from 'react';

export default function LeftBody() {
  return (
    <div>
      <Image
        src='/image-product-1.jpg'
        width='100'
        height='80'
        alt='logo'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
}
