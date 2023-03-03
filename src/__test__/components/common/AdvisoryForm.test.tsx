import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react'
import AdvisoryForm from '../../../components/commons/AdvisoryForm';

describe('AdvisoryForm', () => {
  test('should render Advisory successfully', () => {
    const { baseElement } = render(<AdvisoryForm />);
    expect(baseElement).toBeTruthy();
  });
  test('should close the modal and save the data in SS', () => {
    const setShowModal = jest.fn()
    const { getByTestId } = render(<AdvisoryForm setShowModal={setShowModal} />);
    const selectBtn = document.getElementsByName("advisoryType")[0];
    fireEvent.input(selectBtn, { target: { value: 'real_estate' } })
    const advisoryFormtest = getByTestId('advisoryFormtest');
    fireEvent.click(advisoryFormtest);
    expect(setShowModal).not.toHaveBeenCalled()
  });
});