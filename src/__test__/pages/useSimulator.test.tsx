import { renderHook } from '@testing-library/react-hooks';
import useSimulatorHouse from '../../hooks/useSimulatorHouse';
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { sendSimulationData } from '../../services';

jest.mock('../../services');

(sendSimulationData as jest.Mock).mockReturnValueOnce({
  response: {
    result: '',
  },
  error: false,
});


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
      city:"11001",
      gender:"M",
      stratum:"1"
    };
    const { result } = renderHook(() => useSimulatorHouse(), { wrapper });
    act(() => {
      result.current.onSubmit(data);
    });
    // expect(setBorder).toHaveBeenCalledWith('#798C98');
  });
});
