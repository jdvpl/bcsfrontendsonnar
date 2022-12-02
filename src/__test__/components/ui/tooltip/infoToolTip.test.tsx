import { render } from '@testing-library/react';
import { InfoIco } from '../../../../components/ui/Tooltip/info';
import React from 'react'

describe('InfoIco', () => {
  test('should render "InfoIco" successfully', () => {
    const { baseElement } = render(<InfoIco />);
    expect(baseElement).toBeTruthy();
  });

});
