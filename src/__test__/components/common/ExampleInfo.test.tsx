import { render } from '@testing-library/react';
import React from 'react'
import ExampleInfo from '../../../components/commons/ExampleInfo';

describe('ExampleInfo', () => {
  test('should render "ExampleInfo" successfully', () => {
    const { baseElement } = render(<ExampleInfo />);
    expect(baseElement).toBeTruthy();
  });

});
