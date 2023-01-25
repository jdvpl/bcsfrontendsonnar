import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import useValidations from '../../../../../components/ui/Form/CreditData/useValidations';
import { maxHouseValueNoVis } from '../../../../../lib/simulator';

describe('useValidations is successfully', () => {
  const houseValue: any = 10000000;
  const financeValue: any = 1000000;
  const termFinance: any = 1000000;
  const typeHouse: any = 'vis';
  let clearErrors: any;
  let setError: any;
  let setPercentageFinance: any;
  let setValue: any;
  const houseType = 'vis';

  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();

    const component = renderHook(() =>
      useValidations(
        typeHouse,
        houseValue,
        financeValue,
        termFinance,
        clearErrors,
        setError,
        setPercentageFinance,
        setValue
      )
    );
  });
  it('clearErrors should call 7 time', async () => {
    expect(clearErrors.mock.calls.length).toBe(7);
  });
  it('setError should call 2 time', async () => {
    expect(setError.mock.calls.length).toBe(2);
  });
  it('setPercentageFinance should call 1 time', async () => {
    expect(setPercentageFinance.mock.calls.length).toBe(1);
  });
});

describe('useValidations is successfully', () => {
  const houseValue: any = maxHouseValueNoVis * 2;
  const financeValue: any = maxHouseValueNoVis * 3;
  const termFinance: any = 10;
  const typeHouse: any = 'vis';
  let clearErrors: any;
  let setError: any;
  let setPercentageFinance: any;
  let setValue: any;
  const houseType = 'vis';


  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();

    const component = renderHook(() =>
      useValidations(
        typeHouse,
        houseValue,
        financeValue,
        termFinance,
        clearErrors,
        setError,
        setPercentageFinance,
        setValue
      )
    );
  });
  it('setError should call 2 time', async () => {
    expect(setError.mock.calls.length).toBe(2);
  });

});

describe('', () => {
  it('should calculate percentage finance correctly', () => {
    const { result } = renderHook(() => useValidations('novis', 200, 140, 0, jest.fn(), jest.fn(), jest.fn(), jest.fn()));
    act(() => {
      result.current.calculatePercentageFinance();
    });
    expect(result.current.percentageFinance).toEqual(undefined);
  });

})

