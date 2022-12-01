import { render } from '@testing-library/react';
import React from 'react'
import { TextArea } from '../components/ui/inputs/TextArea';

describe('TextArea', () => {
  test('should render "TextArea" successfully', () => {
    const { baseElement } = render(<TextArea />);
    expect(baseElement).toBeTruthy();
  });

});
