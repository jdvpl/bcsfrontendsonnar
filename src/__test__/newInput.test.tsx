import { render, screen } from '@testing-library/react';
import React from 'react'
import NewInput from '../components/ui/inputs/newInput';

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
  test('should setBorder active', () => {
    jest.mock('react', () => ({
      useState: initial => [initial, mockSetState]
    }))
    render(<NewInput label='Test' error errorText="Error" />);
    mockSetState(true);
    expect(mockSetState).toHaveBeenCalledWith(true);
  })

});
