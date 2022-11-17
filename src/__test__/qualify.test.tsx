import React from 'react';
import { render } from '@testing-library/react';
import { Qualify } from '../components/custom/qualify';
import '@testing-library/jest-dom/extend-expect';

describe('qualify', () => {
  it('should render correctly', () => {
    const props = {
      rate: 5,
      changeRate: () => {},
      isEditable: true,
    };
    const { container } = render(<Qualify {...props} />);
    expect(container).toBeTruthy();
  });
  it('should render stars with active fill', () => {
    const props = {
      rate: 3,
      changeRate: () => {},
      isEditable: true,
    };
    const component = render(<Qualify {...props} />);
    let starsWithActiveFill = 0;
    component.container.querySelectorAll('svg').forEach((star) => {
      if (star?.querySelector('path')?.getAttribute('fill') === '#FBBF24') {
        starsWithActiveFill += 1;
      }
    });
    expect(starsWithActiveFill).toBe(props?.rate + 1);
  });
});
