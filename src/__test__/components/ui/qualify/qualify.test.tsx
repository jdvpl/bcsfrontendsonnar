import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Qualify } from '../../../../components/custom/qualify';
import '@testing-library/jest-dom/extend-expect';
import { debug } from 'console';

describe('<Qualify/>', () => {
  it('should render correctly', () => {
    const props = {
      rate: 5,
      changeRate: (index: number) => { index },
      isEditable: true,
    };
    const { container } = render(<Qualify {...props} />);
    expect(container).toBeTruthy();
  });
  it('should render events', async () => {
    const props = {
      rate: 5,
      changeRate: (index: number) => { index },
      isEditable: true,
    };
    render(<Qualify {...props} />);
    const ratingTestBtn = screen.getAllByRole('ratingTestbtn')[0];
    fireEvent.click(ratingTestBtn)
    fireEvent.mouseEnter(ratingTestBtn)
    fireEvent.mouseLeave(ratingTestBtn);

  });
  it('should render stars with active fill', () => {
    const props = {
      rate: 3,
      changeRate: () => { },
      isEditable: true,
    };
    const component = render(<Qualify {...props} />);
    let starsWithActiveFill = 0;
    component.container.querySelectorAll('svg').forEach((star) => {
      if (star?.querySelector('path')?.getAttribute('fill') === '#FBBF24') {
        starsWithActiveFill = starsWithActiveFill + 1;
      }
    });
    expect(starsWithActiveFill).toBe(props?.rate + 1);
  });
});
