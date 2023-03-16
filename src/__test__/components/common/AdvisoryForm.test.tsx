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
  test('should select other advisroty', () => {
    const setShowModal = jest.fn()
    const { getByTestId, queryByTestId } = render(<AdvisoryForm setShowModal={setShowModal} />);
    const advisoryType = document.getElementsByName("advisoryType")[0];
    fireEvent.input(advisoryType, { target: { value: 'other' } })
    fireEvent.paste(advisoryType, "real_estate")
    const otherAdvioryTypeTest = queryByTestId('otherAdvioryTypeTest');
    fireEvent.input(otherAdvioryTypeTest!, { target: { value: "TestOtros" } });
    fireEvent.change(otherAdvioryTypeTest!, { target: { value: "TestOtros" } });
    fireEvent.paste(otherAdvioryTypeTest!, "nada");
    const advisoryFormtest = getByTestId('advisoryFormtest');
    fireEvent.click(advisoryFormtest);
    expect(otherAdvioryTypeTest).toBeInTheDocument()
  });
  test('should select bank_advisor advisroty', () => {
    const setShowModal = jest.fn()
    const { getByTestId, queryByTestId } = render(<AdvisoryForm setShowModal={setShowModal} />);
    const advisoryType = document.getElementsByName("advisoryType")[0];
    fireEvent.input(advisoryType, { target: { value: 'bank_advisor' } })
    fireEvent.paste(advisoryType, "real_estate")
    const inputDocument = queryByTestId('inputDocument');
    fireEvent.input(inputDocument!, { target: { value: "123567889" } });
    fireEvent.change(inputDocument!, { target: { value: "1234567" } });
    fireEvent.paste(inputDocument!, "nada");
    const advisoryFormtest = getByTestId('advisoryFormtest');
    fireEvent.click(advisoryFormtest);
    expect(inputDocument).toBeInTheDocument()
  });
  test('should select bank_advisor advisroty', () => {
    const setShowModal = jest.fn()
    const { getByTestId, queryByTestId } = render(<AdvisoryForm setShowModal={setShowModal} />);
    const advisoryType = document.getElementsByName("advisoryType")[0];
    fireEvent.input(advisoryType, { target: { value: 'bank_advisor' } })
    fireEvent.paste(advisoryType, "real_estate")
    const inputDocument = queryByTestId('inputDocument');
    fireEvent.input(inputDocument!, { target: { value: "123456789" } });
    fireEvent.paste(inputDocument!, "nada");
    const advisoryFormtest = getByTestId('advisoryFormtest');
    fireEvent.click(advisoryFormtest);
    expect(inputDocument).toBeInTheDocument()
  });
});