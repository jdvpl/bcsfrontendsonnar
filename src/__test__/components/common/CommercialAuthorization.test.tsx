import { render } from '@testing-library/react';
import React from 'react'
import CommercialAuthorization from '../../../components/commons/CommercialAuthorization';

describe('CommercialAuthorization', () => {
  test('should render "CommercialAuthorization" successfully', () => {
    const { baseElement } = render(<CommercialAuthorization />);
    expect(baseElement).toBeTruthy();
  });

});
