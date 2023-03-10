import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreditData from '../../pages/datos-credito';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';

describe('<PersonalDataBasic/>', () => {
  it('should render successfully', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditData />
      </RouterContext.Provider>
    );
    expect(container).toBeTruthy();
  });
});
