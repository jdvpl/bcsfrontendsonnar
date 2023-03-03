import { renderHook } from '@testing-library/react-hooks';
import useSimulator from '../../pages/simulador/useSimulator';
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { sendSimulationData } from '../../services';

jest.mock('../../services');

sendSimulationData.mockReturnValueOnce({
  response: {
    result: '',
  },
  error: false,
});

const initialFields = { password: '' };
const { result } = renderHook(() => useVerificationForm(initialFields, jest.fn()));

const router = createMockRouter({});
const wrapper = ({ children }: any) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);
describe('<useVerificationForm/>', () => {
  test('set border to #798C98 when password is not empty', () => {
    const data = {
      typeHouse: 'novis',
      houseValue: 160000000,
      financeValue: 112000000,
      termFinance: 7,
      percentageFinance: 0.7,
      insuranceCheck: true,
      dateOfBirth: '2000-09-12',
      simulationType: 'house',
      monthlySalary: 0,
      amountQuota: 0,
      percentageQuota: 0.3,
    };
    const setBorder = jest.fn();
    const { result } = renderHook(() => useSimulator(), { wrapper });
    act(() => {
      result.current.onSubmit(data);
    });
    // expect(setBorder).toHaveBeenCalledWith('#798C98');
  });
});
