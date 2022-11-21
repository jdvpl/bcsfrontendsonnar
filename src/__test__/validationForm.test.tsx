import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ValidationForm } from '../components/ui/Form/ValidationForm';
import { useSessionStorage } from '../hooks/useSessionStorage';

describe('Visibility of the ValidationForm', () => {
  it('render component ', async () => {
    function TestComponent() {
      const [dataQuestions] = useSessionStorage('DataQuestions', '');
      const data = dataQuestions;
      return (
        <ValidationForm questions={data?.items} onSubmit={() => console.log('hola')} />
      );
    }
    render(<TestComponent />);
    const component = screen.getByTestId(`validationForm`);
    expect(component).toBeInTheDocument();
  });
});
