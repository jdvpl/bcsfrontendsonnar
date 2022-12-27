import React from 'react';
import { render } from '@testing-library/react';
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
    const { container } = render(<PersonalDataBasic userInfo={userInfo} />);
    expect(container).toBeTruthy();
  });

});
