import { renderHook } from '@testing-library/react-hooks';
import useHouseSimulator from '../../../../../components/ui/Form/houseSimulator/useHouseSimulator';
import { SimulationData } from '../../../../../interfaces';
import { sendSimulationData } from '../../../../../services';
import { createMockRouter } from '../../../../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
jest.mock('../../../../../services');
import React from 'react'

const router = createMockRouter({});

const wrapper = ({ children }: any) => {
  return <RouterContext.Provider value={router}>{children} </RouterContext.Provider>;
};

describe('useHouseSimulator', () => {
  it(' validate onSubmit()', () => {
    (sendSimulationData as jest.Mock).mockReturnValueOnce(() => {
      return {
        error: false,
        response: { data: {} },
      };
    });

    var typeHouse: string = 'vis';
    var houseValue: number = 140000000;
    var financeValue: number = 80000000;
    var termFinance: number = 15;
    var day: string = '10';
    var month: string = '06';
    var year: string = '2000';
    var percentageFinance: number = 0.7;
    var insuranceCheck: boolean = true;
    var calculatePercentageFinance: any = jest.fn();
    var clearErrors: any = jest.fn();
    var setError: any = jest.fn();
    var setIsLoading: any = jest.fn();
    var setDataFormResponse: any = jest.fn();
    var setDataFormQuota: any = jest.fn();

    const { result } = renderHook(
      () =>
        useHouseSimulator({
          typeHouse,
          houseValue,
          financeValue,
          termFinance,
          calculatePercentageFinance,
          day,
          month,
          year,
          clearErrors,
          setError,
          setIsLoading,
          percentageFinance,
          insuranceCheck,
          setDataFormResponse,
          setDataFormQuota,
        }),
      { wrapper }
    );
    const formData: SimulationData = {
      typeHouse: 'vis',
      houseValue: 90000000,
      financeValue: 63000000,
      termFinance: 7,
      day: '13',
      month: '09',
      year: '2000',
      simulationType: '',
      monthlySalary: 0,
      amountQuota: 0,
      percentageFinance: 0,
      percentageQuota: 0,
      insuranceCheck: false,
      dateOfBirth: '',
    };
    result.current?.onSubmit(formData);
  });
});
