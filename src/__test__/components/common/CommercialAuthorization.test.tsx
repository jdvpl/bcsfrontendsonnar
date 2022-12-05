import { render } from '@testing-library/react';
import CommercialAuthorization from '../../../components/commons/CommercialAuthorization';
import React from 'react'
describe('CommercialAuthorization', () => {
  test('should render "CommercialAuthorization" successfully', () => {
    const { baseElement } = render(<CommercialAuthorization />);
    expect(baseElement).toBeTruthy();
  });

});
