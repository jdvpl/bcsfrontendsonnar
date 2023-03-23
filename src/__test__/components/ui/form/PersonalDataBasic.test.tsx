import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PersonalDataBasic from '../../../../components/ui/Form/PersonalDataBasic';
import '@testing-library/jest-dom/extend-expect';
import { createMockRouter } from '../../../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('<PersonalDataBasic/>', () => {
  it('should render successfully', () => {
    const userInfo = {
      "birthDay": "1995-05-27",
      "cellPhone": "3209188638",
      "email": "juanda5542@hotmail.com",
      "address": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": false
    }
    const router = createMockRouter({});
    const { baseElement } = render(<RouterContext.Provider value={router} >
      <PersonalDataBasic userInfo={userInfo} />
    </RouterContext.Provider >);
    expect(baseElement).toBeTruthy();
  });
  it('should show modal if is a client', () => {
    const userInfo = {
      "birthDt": "1995-05-27",
      "cellPhone": "3209188638",
      "email": "juanda5542@hotmail.com",
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": true
    }
    const router = createMockRouter({});

    const { getByTestId, queryByTestId } = render(<RouterContext.Provider value={router} >
      <PersonalDataBasic userInfo={userInfo} />
    </RouterContext.Provider >);
    const yearDtTest = getByTestId('phoneTest');
    fireEvent.focus(yearDtTest);
    const modalDataTest = queryByTestId('modalDataTest');
    expect(modalDataTest).toBeInTheDocument()
  });

});
