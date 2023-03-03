import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ValidationForm, Question, FormProps } from '../../../../components/ui/Form/ValidationForm';

const fn = jest.fn()
describe('Visibility of the ValidationForm', () => {
  const onSubmit = jest.fn();
  const questions: Question[] = [
    {
      key: 'question1',
      description: '¿Cuál es tu nombre?',
      type: 'OPEN-QUESTION',
    },
    {
      key: 'question2',
      description: '¿Cuál es tu edad?',
      type: 'OPEN-QUESTION',
    },
  ];
  const props: FormProps = { onSubmit, questions };
  it('render component ', async () => {
    render(<ValidationForm onSubmit={fn} questions={[]} />);
    const component = screen.getByTestId(`validationForm`);
    expect(component).toBeInTheDocument();
  });
  it('should render the form and questions', () => {
    const { getByTestId, getByText } = render(<ValidationForm {...props} />);
    const form = getByTestId('validationForm');
    expect(form).toBeInTheDocument();
    expect(getByText(questions[0].description)).toBeInTheDocument();
  });
  it('should call the onSubmit method with the responses array when completing the form', () => {
    const { getByLabelText, getByText } = render(<ValidationForm {...props} />);
    const input1 = getByText(questions[0].description);
    fireEvent.click(input1);
  });
  it('should update the current state and add the answer to the responses array when selecting a closed question option', () => {
    const { getByText } = render(
      <ValidationForm
        {...props}
        questions={[
          {
            ...questions[0],
            type: 'CLOSED-QUESTION',
            options: [
              { id: 'option1', option: 'Opción 1' },
              { id: 'option2', option: 'Opción 2' },
            ],
          },
        ]}
      />
    );
    const option1 = getByText('Opción 1');
    fireEvent.click(option1);
  });
});
