import { render } from '@testing-library/react';
import SubtitleError from '../../../../components/ui/error/subtitle';
import React from 'react'

describe('HeadingError', () => {
  test('should render "HeadingError" successfully', () => {
    const { baseElement } = render(<SubtitleError children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
