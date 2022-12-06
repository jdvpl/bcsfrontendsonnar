import { render } from '@testing-library/react';
import LogoBcsWhite from '../../../../components/svg/LogoBcsWhite';
import React from 'react'

describe('LogoBcsWhite', () => {
  test('should render "LogoBcsWhite" successfully', () => {
    const { baseElement } = render(<LogoBcsWhite />);
    expect(baseElement).toBeTruthy();
  });

});
