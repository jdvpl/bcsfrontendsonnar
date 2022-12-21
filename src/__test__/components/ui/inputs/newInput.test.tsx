import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'
import NewInput from '../../../../components/ui/inputs/newInput';
import '@testing-library/jest-dom/extend-expect';

const mockSetState = jest.fn();


describe('NewInput', () => {
  it('should render "NewInput" successfully', () => {
    const { baseElement } = render(<NewInput />);
    expect(baseElement).toBeTruthy();
  });
  it('should render "NewInput" with error', () => {

    render(<NewInput label='Test' error errorText="Error" />);
    const newInput = screen.getByTestId('newInputTest');
    expect(newInput.className.includes('error:bg-rojo-100')).toBe(true);
  });
  it('renders the input component', () => {
    const { getByTestId } = render(<NewInput dataTestId="newInputTest" />);
    expect(getByTestId('newInputTest')).toBeInTheDocument();
  });
  it('displays error message when error prop is provided', () => {
    const { getByTestId, getByText } = render(
      <NewInput dataTestId="newInputTest" error={true} errorText="Error message" />
    );
    expect(getByTestId('newInputTest')).toBeInTheDocument();
    expect(getByText('Error message')).toBeInTheDocument();
  });
  it('displays error message when error prop is provided', () => {
    const { getByTestId } = render(<NewInput dataTestId="newInputTest" />);
    const input = getByTestId('newInputTest');
    fireEvent.focus(input);
    fireEvent.scroll(input, { target: { scrollY: 100 } })
    fireEvent.wheel(input)
    fireEvent.keyUp(input)
    fireEvent.blur(input)
    expect(input).toHaveClass('focus:focus-new');
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(input).toHaveValue('test value');
  });

});
