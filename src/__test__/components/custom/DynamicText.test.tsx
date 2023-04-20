import { render } from '@testing-library/react';
import React from 'react'
import DynamicText from '../../../components/custom/DynamicText';

describe('ContainerButtonForm', () => {
  test('should render "ContainerButtonForm" successfully', () => {
    const { baseElement } = render(<DynamicText isBrowser={true} />);
    expect(baseElement).toBeTruthy();
  });
  test('should render "P" successfully', () => {
    const { getByTestId } = render(<DynamicText isBrowser={true} />);
    const typographyTest = getByTestId('phoneFromTest');
    expect(typographyTest.tagName).toMatch('P')
  });

});
