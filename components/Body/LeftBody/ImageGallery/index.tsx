import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Thumbnail = styled.div`
  cursor: pointer;
  margin: 5px;

  img {
    border: 2px solid transparent;
    &:hover {
      border-color: blue;
    }
  }
`;

const ImageGallery = () => {
  const products = [
    {
      thumbnail: '/image-product-1-thumbnail.jpg',
      mainImage: '/image-product-1.jpg',
    },
    {
      thumbnail: '/image-product-2-thumbnail.jpg',
      mainImage: '/image-product-2.jpg',
    },
    {
      thumbnail: '/image-product-3-thumbnail.jpg',
      mainImage: '/image-product-3.jpg',
    },
    {
      thumbnail: '/image-product-4-thumbnail.jpg',
      mainImage: '/image-product-4.jpg',
    },
  ];

  const [mainImage, setMainImage] = useState(products[0].mainImage);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
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
      <div>
        {products.map((product, index) => (
          <Thumbnail
            key={index}
            onClick={() => handleThumbnailClick(product.mainImage)}
          >
            <Image
              src={product.thumbnail}
              width='100'
              height='80'
              alt={`Thumbnail ${index + 1}`}
            />
          </Thumbnail>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
