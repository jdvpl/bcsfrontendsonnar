import React from 'react';
import { render } from '@testing-library/react';
import { RateForm } from '../components/ui/Form/ratingForm';
import '@testing-library/jest-dom/extend-expect';

describe('Rating', () => {
  it('should render successfully', () => {
    const { container } = render(<RateForm />);
    expect(container).toBeTruthy();
  });
  it('', () => {
    const { container } = render(<RateForm />);
  });
});
