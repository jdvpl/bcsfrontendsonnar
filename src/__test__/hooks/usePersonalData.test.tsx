import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import usePersonalData from '../../hooks/usePersonalData'
import { createMockRouter } from '../utils/createMockRouter';


describe('usePersonalData', () => {
  const router = createMockRouter({});
  const setData = jest.fn();
  it('divides the birth date into year, month, and day', () => {
    const setValue = jest.fn();
    const userInfo = {
      birthDt: '2000-01-01',
      cellPhone: '123456789',
      emailAddr: 'test@example.com',
      addr1: '123 Main St'
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();


    renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData));

    expect(setValue).toHaveBeenCalledWith('yearDt', '2000');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
  })

  it('sets the phone, email, and current address values', () => {
    const setValue = jest.fn();
    const userInfo = {
      birthDt: '2000-01-01',
      cellPhone: '123456789',
      emailAddr: 'test@example.com',
      addr1: '123 Main St'
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData));

    expect(setValue).toHaveBeenCalledWith('phone', '123456789');
    expect(setValue).toHaveBeenCalledWith('email', 'test@example.com');
  });
  it('splits the birth date and sets values in the state', () => {
    const userInfo = {
      birthDt: '1980-01-01',
      cellPhone: '555-555-5555',
      emailAddr: 'test@example.com',
      addr1: '123 Main St',
    };
    const setValue = jest.fn();
    const setError = jest.fn();
    const clearErrors = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData));
    expect(setValue).toHaveBeenCalledWith('yearDt', '1980');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith('phone', '555-555-5555');
    expect(setValue).toHaveBeenCalledWith('email', 'test@example.com');
    expect(setValue).toHaveBeenCalledTimes(5);
  });
  it('should set error if calculated age is less than 19 or greater than 71', () => {
    const setValue = jest.fn();
    const userInfo = { birthDt: '2000-01-01' };
    const setError = jest.fn();
    const clearErrors = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '01', '01', '1800', router, setData));

    expect(setError).toHaveBeenCalledWith(
      'dayDt',
      {
        type: 'error',
        message: 'Fecha inválida',
      },
      {
        shouldFocus: true,
      }
    );
  });
  it('should set error if the date is invalid', () => {
    const setValue = jest.fn();
    const userInfo = { birthDt: '2000-01-01' };
    const setError = jest.fn();
    const clearErrors = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData));

    expect(setError).toHaveBeenCalledWith(
      'dayDt',
      {
        type: 'error',
        message: 'Fecha inválida',
      },
      {
        shouldFocus: true,
      }
    );
  })
  it('should set error if calculated age is less than 19 or greater than 71', () => {
    const setValue = jest.fn();
    const userInfo = { birthDt: '2000-01-01' };
    const setError = jest.fn();
    const clearErrors = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '01', '01', '1800', router, setData));

    expect(setError).toHaveBeenCalledWith(
      'dayDt',
      {
        type: 'error',
        message: 'Fecha inválida',
      },
      {
        shouldFocus: true,
      }
    );
  });

  it('should set values for yearDt, monthDt, dayDt, phone, email, and currentAddress', () => {
    const setValue = jest.fn();
    const userInfo = {
      birthDt: '2000-01-01',
      cellPhone: '123456789',
      emailAddr: 'example@example.com',
      addr1: '123 Main St'
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '02', '01', '2000', router, setData));

    expect(setValue).toHaveBeenCalledWith('yearDt', '2000');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith('phone', '123456789');
    expect(setValue).toHaveBeenCalledWith('email', 'example@example.com');
  });
})