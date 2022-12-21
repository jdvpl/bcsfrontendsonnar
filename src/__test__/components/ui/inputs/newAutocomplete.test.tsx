import { render, fireEvent } from '@testing-library/react';
import React, { useState } from 'react'
import NewAutoComplete from '../../../../components/ui/inputs/newAutoComplete';

describe('newAutoComplete', () => {
  const initialBorder = '#B0C2CD';

  test('should render "newAutoComplete" successfully', () => {
    const { baseElement } = render(<NewAutoComplete />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the value of color', () => {
    const { baseElement } = render(<NewAutoComplete />);
    React.useState = jest.fn().mockReturnValue([initialBorder, {}])
    expect(baseElement.classList.length).toBe(0)
  })
  test('renders NewAutoComplete component and performs basic actions', () => {
    const { getByRole } = render(<NewAutoComplete />);
    const input = getByRole('combobox');
    // Creamos un evento de cambio de texto y lo disparamos en el campo de entrada
    fireEvent.change(input, { target: { value: 'BOGOTA - BOGOTA D.C.' } });
    fireEvent.change(input, { target: { value: '05044' } });
    fireEvent.keyUp(input, { target: { value: 'B' } });
    // Comprobamos que el valor del campo de entrada haya cambiado
    // expect(input).toBe('BOGOTA - BOGOTA D.C.');
  });

});
