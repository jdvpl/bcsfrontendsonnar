import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PersonalDataBasic from '../../../../components/ui/Form/PersonalDataBasic';
import '@testing-library/jest-dom/extend-expect';

describe('<PersonalDataBasic/>', () => {
  it('should render successfully', () => {
    const userInfo = {
      "birthDt": "1995-05-27",
      "cellPhone": "3209188638",
      "emailAddr": "juanda5542@hotmail.com",
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": false
    }
    const { baseElement } = render(<PersonalDataBasic userInfo={userInfo} />);
    expect(baseElement).toBeTruthy();
  });
  it('should show modal if is a client', () => {
    const userInfo = {
      "birthDt": "1995-05-27",
      "cellPhone": "3209188638",
      "emailAddr": "juanda5542@hotmail.com",
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": true
    }
    const { getByTestId, queryByTestId } = render(<PersonalDataBasic userInfo={userInfo} />);
    const yearDtTest = getByTestId('yearDtTest');
    fireEvent.focus(yearDtTest);
    const modalDataTest = queryByTestId('modalDataTest');
    expect(modalDataTest).toBeInTheDocument()
  });

});
