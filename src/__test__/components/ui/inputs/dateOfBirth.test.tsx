import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'
import { debug } from 'console';
import DateOfBirth from '../../../../components/ui/inputs/dateOfBirth';

const mkFn = jest.fn()
describe('dateOfBirth testing', () => {

  it('should dateOfBirth component rendered', () => {
    render(<DateOfBirth
      defaultValues={undefined}
      onChangeDate={mkFn} />);
    const component = screen.getByTestId('birth');
    expect(component.children.length).toBe(3);
  })
  test('should fill data', () => {
    render(<DateOfBirth
      defaultValues={undefined}
      onChangeDate={mkFn} />);
    const day = document.getElementsByName('day')[0];
    const month = document.getElementsByName('month')[0];
    const year = screen.getByTestId('yearDateOfBithTest');
    fireEvent.change(day, { target: { value: '08' } });
    fireEvent.change(month, { target: { value: '08' } });
    fireEvent.change(year, { target: { value: '1999' } });
    expect(day).toBeInTheDocument();

    expect(month).toBeInTheDocument();

    expect(year).toBeInTheDocument();
  })

})
