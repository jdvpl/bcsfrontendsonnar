import { render } from '@testing-library/react';
import ContainerButton from '../../../../components/ui/error/containerButton';
import React from 'react'

describe('ContainerButton', () => {
  test('should render "ContainerButton" successfully', () => {
    const { baseElement } = render(<ContainerButton children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
