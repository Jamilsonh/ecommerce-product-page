import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/productsData';
import { ContainerImage, ContainerMenuImage } from './styles';

const ImageGallery = () => {
  const [mainImage, setMainImage] = useState(products[0].mainImage);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <>
      <ContainerImage>
        <Image
          src={mainImage}
          width='600'
          height='400'
          alt='Product Image'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ContainerImage>

      <ContainerMenuImage>
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(product.mainImage)}
          >
            <Image
              src={product.thumbnail}
              width='80'
              height='80'
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </ContainerMenuImage>
    </>
  );
};

export default ImageGallery;
