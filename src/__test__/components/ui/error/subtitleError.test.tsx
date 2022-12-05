import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/subtitleError.test.tsx
=======
import { SubtitleError } from '../../../../components/ui/error/subtitle';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/error/subtitleError.test.tsx
import React from 'react'
import { SubtitleError } from '../components/ui/error/subtitle';

describe('HeadingError', () => {
  test('should render "HeadingError" successfully', () => {
    const { baseElement } = render(<SubtitleError children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
