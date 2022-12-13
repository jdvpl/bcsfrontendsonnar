import { render } from '@testing-library/react';
import React from 'react'
import { ItemOne } from '../../../../components/icons/biometria/items';

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ItemOne />);
    expect(baseElement).toBeTruthy();
  });
});
