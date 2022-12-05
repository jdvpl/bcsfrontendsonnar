import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/HelperText.test.tsx
=======
import { HelperText } from '../../../../components/ui/inputs/HelperText';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/inputs/HelperText.test.tsx
import React from 'react'
import { HelperText } from '../components/ui/inputs/HelperText';

describe('HelperText', () => {
  test('should render "HelperText" successfully', () => {
    const { baseElement } = render(<HelperText text="" error={false} />);
    expect(baseElement).toBeTruthy();
  });

});
