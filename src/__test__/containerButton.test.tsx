import { render } from '@testing-library/react';
import React from 'react'
import { ContainerButton } from '../components/ui/error/containerButton';

describe('ContainerButton', () => {
  test('should render "ContainerButton" successfully', () => {
    const { baseElement } = render(<ContainerButton children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
