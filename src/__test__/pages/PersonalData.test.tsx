import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import PersonalData from '../../pages/datos-personales';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

describe('PersonalData', () => {
  it('should render "PersonalData" successfully', () => {
    const { baseElement } = render(<PersonalData />);
    expect(baseElement).toBeTruthy();
  });
  it('should Close Modal', async () => {
    const { getByTestId } = render(<PersonalData />);
    const btnCloseModal = getByTestId('btn-close');
    const modalDataTest = getByTestId('modalDataTest');
    await userEvent.click(btnCloseModal);
    expect(modalDataTest).not.toBeInTheDocument()
  });
  it('should Close Modal with other button', async () => {
    const { getByTestId } = render(<PersonalData />);
    const btnCloseModal = getByTestId('btn-closeModal');
    const modalDataTest = getByTestId('modalDataTest');
    await userEvent.click(btnCloseModal);
    expect(modalDataTest).not.toBeInTheDocument()
  });
  it('should open Form', async () => {
    const { getByTestId } = render(<PersonalData />);
    const btnOpenForm = getByTestId('btn-advisoryTest');
    const modalDataTest = getByTestId('modalDataTest');
    await userEvent.click(btnOpenForm);
    const advisoryType = document.getElementsByName("advisoryType")[0];
    const btnadvisoryFormtest = getByTestId('advisoryFormtest');
    fireEvent.input(advisoryType, { target: { value: 'campaign' } });
    await userEvent.click(btnadvisoryFormtest);
    expect(modalDataTest).not.toBeInTheDocument()
  });
  it('should open Form', async () => {
    const { getByTestId, queryByTestId } = render(<PersonalData />);
    const btnOpenForm = getByTestId('btn-advisoryTest');
    const modalDataTest = getByTestId('modalDataTest');
    await userEvent.click(btnOpenForm);
    const advisoryType = document.getElementsByName("advisoryType")[0];
    const btnadvisoryFormtest = getByTestId('advisoryFormtest');
    fireEvent.input(advisoryType, { target: { value: 'other' } });
    const inputDocument = queryByTestId('otherAdvioryTypeTest');

    fireEvent.input(inputDocument!, { target: { value: 'React' } });
    fireEvent.paste(inputDocument!, "data");

    await userEvent.click(btnadvisoryFormtest);
    expect(modalDataTest).not.toBeInTheDocument()
  });
});