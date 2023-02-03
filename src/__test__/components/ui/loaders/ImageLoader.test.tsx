import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render, cleanup } from '@testing-library/react';
import React from 'react'
import ImageLoader from '../../../../components/ui/Loaders/imageLoader';

describe('ImageLoader', () => {
  afterEach(cleanup);
  test('should render "ImageLoader" successfully', () => {
    const { baseElement } = render(<ImageLoader src="" />);
    expect(baseElement).toBeTruthy();
  });
  test('should render an image', () => {
    const alt = 'image';
    const src = "https://fakeimg.pl/300/"
    const { getByAltText } = render(<ImageLoader src={src} width={40} height={40} alt={alt} />);
    const img = getByAltText(alt);
    expect(img).toHaveAttribute('src');
  });

  test('ImageLoader component should render with the provided props', () => {
    const { getByTestId } = render(
      <ImageLoader
        src="example.jpg"
        alt="Example"
        title="Example Image"
        itemprop="image"
        width={500}
        height={500}
        quality={90}
      />
    );
    const image = getByTestId('imageLoader');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Example');
    expect(image).toHaveAttribute('title', 'Example Image');
    expect(image).toHaveAttribute('itemprop', 'image');
  });

});
