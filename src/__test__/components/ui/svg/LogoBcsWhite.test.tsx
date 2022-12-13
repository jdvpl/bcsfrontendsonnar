import { render } from '@testing-library/react';
import React from 'react'
import LogoBcsWhite from '../../../../components/svg/LogoBcsWhite';

describe('LogoBcsWhite', () => {
  test('should render "LogoBcsWhite" successfully', () => {
    const { baseElement } = render(<LogoBcsWhite />);
    expect(baseElement).toBeTruthy();
  });

});
