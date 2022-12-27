import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import Input from '../../../../components/ui/inputs';
import '@testing-library/jest-dom'

describe('Input', () => {
  test('should render "Input" successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
  test('should act events on "Input"', () => {
    const { getByTestId, getByText } = render(<Input dataTestId='inputElement' helperText='Hola' error />);
    const input = getByTestId('inputElement')
    fireEvent.wheel(input)
    fireEvent.blur(input)
    const elementError = getByText('Hola')
    expect(elementError).toBeInTheDocument()
  });
  test('renders start icon when provided', () => {
    const { getByTestId } = render(<Input startIcon="bcs-money" dataTestId="input" />);
    const input = getByTestId('input');
    expect(input).toHaveClass('pl-8');
  });
  test('renders end icon when provided', () => {
    const { getByTestId } = render(<Input endIcon="bcs-advertising" dataTestId="input" />);
    const input = getByTestId('input');
    expect(input).toHaveClass('pr-8');
  });
  test('renders input with error style when error prop is true', () => {
    const { getByTestId } = render(<Input error dataTestId="input" />);
    const input = getByTestId('input');
    expect(input).toHaveClass('border-rojo-100');
    expect(input).toHaveClass('text-complementario-100');
  });
});
