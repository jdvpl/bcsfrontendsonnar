import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/qualify.test.tsx
import  Qualify  from '../components/custom/qualify';
=======
import { Qualify } from '../../../../components/custom/qualify';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/qualify/qualify.test.tsx
import '@testing-library/jest-dom/extend-expect';

describe('<Qualify/>', () => {
  it('should render correctly', () => {
    const props = {
      rate: 5,
      changeRate: () => { },
      isEditable: true,
    };
    const { container } = render(<Qualify {...props} />);
    expect(container).toBeTruthy();
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
        starsWithActiveFill += 1;
      }
    });
    expect(starsWithActiveFill).toBe(props?.rate + 1);
  });
});
