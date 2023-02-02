import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExitModal from '../../../components/commons/ExitModal';

describe('ExitModal component', () => {
  it('renders the phone numbers and branch information', () => {
    const { baseElement } = render(<ExitModal setshowModalExit={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });
  test('ExitModal component should trigger closeModal on button click', () => {
    const setshowModalExit = jest.fn();
    const { getByTestId } = render(<ExitModal setshowModalExit={setshowModalExit} />);
    const button = getByTestId('advisoryFormtest');
    fireEvent.click(button);
    expect(setshowModalExit).toHaveBeenCalledWith(false);
  })
});



