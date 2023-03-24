import { render } from '@testing-library/react';
import React from 'react';
import Icons from '../../../../components/ui/icons';

describe('Icons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icons icon="bcs-icon-49" title="" />);
    expect(baseElement).toBeTruthy();
  });
});
