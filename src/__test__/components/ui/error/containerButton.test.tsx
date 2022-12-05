import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/containerButton.test.tsx
=======
import { ContainerButton } from '../../../../components/ui/error/containerButton';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/error/containerButton.test.tsx
import React from 'react'
import { ContainerButton } from '../components/ui/error/containerButton';

describe('ContainerButton', () => {
  test('should render "ContainerButton" successfully', () => {
    const { baseElement } = render(<ContainerButton children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
