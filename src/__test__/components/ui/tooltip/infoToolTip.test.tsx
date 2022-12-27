import { render } from '@testing-library/react';
import React from 'react'
import { InfoIco } from '../../../../components/ui/Tooltip/info';

describe('InfoIco', () => {
  test('should render "InfoIco" successfully', () => {
    const { baseElement } = render(<InfoIco />);
    expect(baseElement).toBeTruthy();
  });

});
