import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreditData from '../../pages/datos-credito';

describe('<PersonalDataBasic/>', () => {
  it('should render successfully', () => {
    const { container } = render(<CreditData />);
    expect(container).toBeTruthy();
  });
});
