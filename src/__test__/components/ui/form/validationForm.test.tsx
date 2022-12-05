import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/validationForm.test.tsx
import { ValidationForm } from "../components/ui/Form/ValidationForm";

=======
import { ValidationForm } from '../../../../components/ui/Form/ValidationForm';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/form/validationForm.test.tsx
const fn = jest.fn()
describe('Visibility of the ValidationForm', () => {
  it('render component ', async () => {
    render(<ValidationForm onSubmit={fn} questions={[]} />);
    const component = screen.getByTestId(`validationForm`);
    expect(component).toBeInTheDocument();
  });
});
