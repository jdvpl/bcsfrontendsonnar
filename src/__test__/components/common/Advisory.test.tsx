import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react'
import Advisory from '../../../components/commons/Advisory';

describe('Advisory', () => {
  test('should render Advisory successfully', () => {
    const { baseElement } = render(<Advisory />);
    expect(baseElement).toBeTruthy();
  });
  test('should click if user has been called', () => {
    const { getByTestId } = render(<Advisory />);
    const btnAdvisoryTestBtn = getByTestId('btn-advisoryTest');
    fireEvent.click(btnAdvisoryTestBtn);
    const advisoryForm = getByTestId("advisoryForm");
    expect(advisoryForm).toBeInTheDocument()
  });
  test('should close the modal', () => {
    const setShowModal = jest.fn()
    const { getByTestId } = render(<Advisory setShowModal={setShowModal} />);
    const btnAdvisoryTestBtn = getByTestId('btn-closeModal');

    fireEvent.click(btnAdvisoryTestBtn);
    const advisoryForm = getByTestId("modalAdvisory");
    expect(setShowModal).not.toHaveBeenCalled()
  });
});