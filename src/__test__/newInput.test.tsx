import { render, screen } from '@testing-library/react';
import NewInput from '../components/ui/inputs/newInput';
import React from 'react'

const mockSetState = jest.fn();

describe('NewInput', () => {
  it('should render "NewInput" successfully', () => {
    const { baseElement } = render(<NewInput />);
    expect(baseElement).toBeTruthy();
  });
  it('should render "NewInput" with error', () => {

    render(<NewInput label='Test' error={true} errorText="Error" />);
    const newInput = screen.getByTestId('newInputTest');
    expect(newInput.className.includes('error:bg-rojo-100')).toBe(true);
  });
  test('should setBorder active', () => {
    jest.mock('react', () => ({
      useState: initial => [initial, mockSetState]
    }))
    render(<NewInput label='Test' error={true} errorText="Error" />);
    mockSetState(true);
    expect(mockSetState).toHaveBeenCalledWith(true);
  })

});
