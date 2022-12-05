import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/LogoBcsWhite.test.tsx
=======
import LogoBcsWhite from '../../../../components/svg/LogoBcsWhite';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/svg/LogoBcsWhite.test.tsx
import React from 'react'
import LogoBcsWhite from '../components/svg/LogoBcsWhite';

describe('LogoBcsWhite', () => {
  test('should render "LogoBcsWhite" successfully', () => {
    const { baseElement } = render(<LogoBcsWhite />);
    expect(baseElement).toBeTruthy();
  });

});
