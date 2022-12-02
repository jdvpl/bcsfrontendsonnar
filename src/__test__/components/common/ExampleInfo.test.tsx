import { render } from '@testing-library/react';
import { ExampleInfo } from '../../../components/commons/ExampleInfo';
import React from 'react'

describe('ExampleInfo', () => {
  test('should render "ExampleInfo" successfully', () => {
    const { baseElement } = render(<ExampleInfo />);
    expect(baseElement).toBeTruthy();
  });

});
