import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/ContainerButtonForm.test.tsx
import  ContainerButtonForm  from '../components/form/containerButtonForm';
=======
import { ContainerButtonForm } from '../../../../components/ui/Form/ContainerButtonForm';
import React from 'react'
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/form/ContainerButtonForm.test.tsx

describe('ContainerButtonForm', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ContainerButtonForm>Prueba</ContainerButtonForm>);
    expect(baseElement).toBeTruthy();
  });
});
