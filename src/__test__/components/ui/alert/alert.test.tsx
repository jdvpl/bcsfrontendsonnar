import { render } from '@testing-library/react';
import Alert from '../../../../components/ui/Alert';
import React from 'react'
describe('<Alert/>', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Alert message="card" />);
    expect(baseElement).toBeTruthy();
  });
});
