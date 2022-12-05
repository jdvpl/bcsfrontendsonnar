import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/headingError.test.tsx
=======
import { HeadingError } from '../../../../components/ui/error/heading';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/error/headingError.test.tsx
import React from 'react'
import { HeadingError } from '../components/ui/error/heading';

describe('HeadingError', () => {
  test('should render "HeadingError" successfully', () => {
    const { baseElement } = render(<HeadingError children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
