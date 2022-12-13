import { render } from '@testing-library/react';
import React from 'react'
import SubtitleError from '../../../../components/ui/error/subtitle';

describe('HeadingError', () => {
  test('should render "HeadingError" successfully', () => {
    const { baseElement } = render(<SubtitleError children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
