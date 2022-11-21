import React from 'react';
import Image from 'next/image';

interface Img {
  src: string;
  className?: string;
  width?: number;
  quality?: number;
  height?: number;
  alt?: string;
  title?: string;
  itemprop?: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
}

const myLoader = ({ src }: Img) => `${src}`;

const ImageLoader = ({ alt, title, itemprop, ...props }: Img) => {
  return (
    <Image
      data-testid="imageLoader"
      layout="responsive"
      {...props}
      loader={myLoader}
      unoptimized
      alt={alt}
      tabIndex={0}
      role="img"
      title={title}
      itemProp="image"
    />
  );
};

export default ImageLoader;
