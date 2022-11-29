import { render } from '@testing-library/react';
import { TextArea } from '../components/ui/inputs/TextArea';
import React from 'react'

describe('TextArea', () => {
  test('should render "TextArea" successfully', () => {
    const { baseElement } = render(<TextArea />);
    expect(baseElement).toBeTruthy();
  });

});
