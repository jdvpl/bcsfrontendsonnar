import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import Authentication from '../../pages/autenticacion';
import React from 'react'
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('Authentication', () => {
  it('should render "Authentication" successfully', () => {
    const { baseElement } = render(<Authentication />);
    expect(baseElement).toBeTruthy();
  });


  // test('should goback', async () => {
  //   const router = createMockRouter({});
  //   render(
  //     <RouterContext.Provider value={router}>
  //       <Authentication />
  //     </RouterContext.Provider>
  //   );
  //   const getbackRouteTest = screen.('getbackRouteTest');
  //   await waitFor(() => userEvent.click(getbackRouteTest));

  // })


});
