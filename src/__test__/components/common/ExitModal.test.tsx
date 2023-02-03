import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExitModal from '../../../components/commons/ExitModal';
import { createMockRouter } from '../../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from '../../../routes';

describe('ExitModal component', () => {
  it('renders the phone numbers and branch information', () => {
    const { baseElement } = render(<ExitModal setshowModalExit={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });
  test('ExitModal component should trigger closeModal on button click', () => {
    const setshowModalExit = jest.fn();
    const { getByTestId } = render(<ExitModal setshowModalExit={setshowModalExit} />);
    const button = getByTestId('continueBtn');
    fireEvent.click(button);
    expect(setshowModalExit).toHaveBeenCalledWith(false);
  })
  test('ExitModal component should trigger closeModal on button click', async () => {
    const setshowModalExit = jest.fn();
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <ExitModal setshowModalExit={setshowModalExit} />
      </RouterContext.Provider>
    );
    const button = await findByTestId('closeModalExit');
    fireEvent.click(button);
    expect(router.replace).toHaveBeenCalledWith(routes.home)
  })
});



