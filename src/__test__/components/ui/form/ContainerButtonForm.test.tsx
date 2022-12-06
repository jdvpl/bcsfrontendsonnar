import { render } from '@testing-library/react';
import ContainerButtonForm from '../../../../components/ui/Form/ContainerButtonForm';
import React from 'react'

describe('ContainerButtonForm', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ContainerButtonForm>Prueba</ContainerButtonForm>);
    expect(baseElement).toBeTruthy();
  });
});
