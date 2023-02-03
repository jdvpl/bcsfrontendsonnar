import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react'
import userEvent from '@testing-library/user-event';
import PersonalData from '../../pages/datos-personales';
import '@testing-library/jest-dom'
import PersonalDataBasic from '../../components/ui/Form/PersonalDataBasic';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';


describe('PersonalData', () => {

  it('<PersonalData/>', () => {
    const router = createMockRouter({});
    const { baseElement } = render(<RouterContext.Provider value={router} >
      <PersonalData />
    </RouterContext.Provider >);
    expect(baseElement).toBeTruthy();
  })

  it('should Close Modal', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(<RouterContext.Provider value={router} >
      <PersonalData />
    </RouterContext.Provider >);
    const btnCloseModal = getByTestId('btn-close');
    const modalDataTest = getByTestId('modalDataTest');
    await userEvent.click(btnCloseModal);
    expect(modalDataTest).not.toBeInTheDocument()
  });


  it('should Close Modal KeyDowm', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(<RouterContext.Provider value={router} >
      <PersonalData />
    </RouterContext.Provider >)
    const btnCloseModal = getByTestId('btn-close');
    const modalDataTest = getByTestId('modalDataTest');
    fireEvent.keyDown(btnCloseModal);
    expect(modalDataTest).not.toBeInTheDocument()
  });
  it('should Close Modal with other button', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(<RouterContext.Provider value={router} >
      <PersonalData />
    </RouterContext.Provider >);
    const btnCloseModal = getByTestId('btn-closeModal');
    const modalDataTest = getByTestId('modalDataTest');
    await userEvent.click(btnCloseModal);
    expect(modalDataTest).not.toBeInTheDocument()
  });
  it('should open Form', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(<RouterContext.Provider value={router} >
      <PersonalData />
    </RouterContext.Provider >);
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
    const router = createMockRouter({});
    const { getByTestId, queryByTestId } = render(<RouterContext.Provider value={router} >
      <PersonalData />
    </RouterContext.Provider >)
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

  it('should fill form', async () => {
    const userInfo = {
      "birthDt": "1995-05-27",
      "cellPhone": null,
      "emailAddr": null,
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": false
    }
    const router = createMockRouter({});
    const { getByTestId, getAllByRole, getByText } = render(<RouterContext.Provider value={router} >
      <PersonalDataBasic userInfo={userInfo} />
    </RouterContext.Provider >);

    const day = document.getElementsByName('dayDt')[0];
    const month = document.getElementsByName('monthDt')[0];
    const genderTest = document.getElementsByName('gender')[0];
    const year = getByTestId('yearDtTest');

    const inputBirthCity = getAllByRole('combobox')[0];
    const phoneTest = getByTestId('phoneTest');
    const emailTest = getByTestId('emailTest');
    const inputCurretnCity = getAllByRole('combobox')[1];
    const currentAddres = getByTestId('currentAddres');

    const btnBasicDataTest = getByTestId('btnBasicDataTest');

    fireEvent.change(day, { target: { value: '08' } });
    fireEvent.change(month, { target: { value: '08' } });
    fireEvent.change(year, { target: { value: '1999' } });

    await waitFor(() => {
      userEvent.type(inputBirthCity, 'bog');
    });


    fireEvent.input(genderTest, { target: { value: 'male' } })
    fireEvent.paste(phoneTest, "dta")
    fireEvent.input(phoneTest, { target: { value: '3213627615' } })

    fireEvent.paste(emailTest, "dta")
    fireEvent.input(emailTest, { target: { value: 'test@gmail.com' } })

    fireEvent.paste(currentAddres, "currentAddres")
    fireEvent.input(currentAddres, { target: { value: 'Cra falsa # falsa-5' } })

    await userEvent.click(btnBasicDataTest)

  });
  it('should fill form ', async () => {
    const userInfo = {
      "birthDt": "1995-05-27",
      "cellPhone": 'adsf',
      "emailAddr": 'asd',
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": true
    }
    const router = createMockRouter({});
    const { getByTestId, getAllByRole, getByText } = render(<RouterContext.Provider value={router} >
      <PersonalDataBasic userInfo={userInfo} />
    </RouterContext.Provider >);


    const genderTest = document.getElementsByName('gender')[0];
    const inputBirthCity = getAllByRole('combobox')[0];

    const inputCurretnCity = getAllByRole('combobox')[1];
    const currentAddres = getByTestId('currentAddres');
    const btnBasicDataTest = getByTestId('btnBasicDataTest');
    const personaldataTest = getByTestId('personaldataTest')


    await waitFor(() => {
      userEvent.type(inputBirthCity, 'bog');
    });


    fireEvent.input(genderTest, { target: { value: 'male' } })

    fireEvent.paste(currentAddres, "currentAddres")
    fireEvent.input(currentAddres, { target: { value: 'Cra falsa # falsa-5' } })

    fireEvent.submit(personaldataTest);


  });
});