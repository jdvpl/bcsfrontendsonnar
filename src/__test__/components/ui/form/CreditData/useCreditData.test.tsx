import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useValidations from '../../../../../components/ui/Form/CreditData/useCreditData';
import { maxHouseValueNoVis } from '../../../../../lib/simulator';

describe('useValidations is successfully', () => {
  const houseValue: any = 10000000;
  const financeValue: any = 1000000;
  const termFinance: any = 1000000;
  let clearErrors: any;
  let setError: any;
  let setPercentageFinance: any;
  let setValue: any;

  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();

    const component = renderHook(() =>
      useValidations(
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
    console.log(setError.mock.calls.length);
    expect(setError.mock.calls.length).toBe(2);
  });
  it('setPercentageFinance should call 1 time', async () => {
    console.log(setPercentageFinance.mock.calls.length);
    expect(setPercentageFinance.mock.calls.length).toBe(1);
  });
});

describe('useValidations is successfully', () => {
  const houseValue: any = maxHouseValueNoVis * 2;
  const financeValue: any = maxHouseValueNoVis * 3;
  const termFinance: any = 10;
  let clearErrors: any;
  let setError: any;
  let setPercentageFinance: any;
  let setValue: any;

  beforeEach(async () => {
    clearErrors = jest.fn();
    setPercentageFinance = jest.fn();
    setError = jest.fn();
    setValue = jest.fn();
    jest.resetAllMocks();

    const component = renderHook(() =>
      useValidations(
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
    console.log(setError.mock.calls[0]);
    expect(setError.mock.calls.length).toBe(2);
  });
});
