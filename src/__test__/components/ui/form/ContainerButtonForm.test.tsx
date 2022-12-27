import { render } from '@testing-library/react';
import React from 'react'
import ContainerButtonForm from '../../../../components/ui/Form/ContainerButtonForm';

describe('ContainerButtonForm', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ContainerButtonForm>Prueba</ContainerButtonForm>);
    expect(baseElement).toBeTruthy();
  });
});
