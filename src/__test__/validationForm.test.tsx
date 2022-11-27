import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ValidationForm } from '../../src/components/ui/Form/ValidationForm';
const fn = jest.fn()
describe('Visibility of the ValidationForm', () => {
  it('render component ', async () => {
    render(<ValidationForm onSubmit={fn} questions={[]} />);
    const component = screen.getByTestId(`validationForm`);
    expect(component).toBeInTheDocument();
  });
});
