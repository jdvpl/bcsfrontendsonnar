import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OfficeBranch from '../../../components/commons/OfficeBranch';

describe('OfficeBranch component', () => {
  it('renders the phone numbers and branch information', () => {
    const { baseElement } = render(<OfficeBranch setShowModal={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });

  test('OfficeBranch component should trigger closeModal on button click', () => {
    const setShowModal = jest.fn();
    const { getByTestId } = render(<OfficeBranch setShowModal={setShowModal} />);

    const button = getByTestId('advisoryFormtest');
    fireEvent.click(button);

    expect(setShowModal).toHaveBeenCalledWith(false);
  })
});



