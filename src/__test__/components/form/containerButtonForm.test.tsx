import { render } from '@testing-library/react';
import React from 'react'
import ContainerButtonForm from '../../../components/form/containerButtonForm';

describe('ContainerButtonForm', () => {
  test('should render "ContainerButtonForm" successfully', () => {
    const { baseElement } = render(<ContainerButtonForm children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
