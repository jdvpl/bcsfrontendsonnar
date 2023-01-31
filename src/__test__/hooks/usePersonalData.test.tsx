import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import usePersonalData from '../../hooks/usePersonalData'


describe('usePersonalData', () => {
  it('divides the birth date into year, month, and day', () => {
    const setValue = jest.fn();
    const userInfo = {
      birthDt: '2000-01-01',
      cellPhone: '123456789',
      emailAddr: 'test@example.com',
      addr1: '123 Main St'
    };

    renderHook(() => usePersonalData(setValue, userInfo));

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

    renderHook(() => usePersonalData(setValue, userInfo));

    expect(setValue).toHaveBeenCalledWith('phone', '123456789');
    expect(setValue).toHaveBeenCalledWith('email', 'test@example.com');
    expect(setValue).toHaveBeenCalledWith('currentAddress', '123 Main St');
  });
  it('splits the birth date and sets values in the state', () => {
    const userInfo = {
      birthDt: '1980-01-01',
      cellPhone: '555-555-5555',
      emailAddr: 'test@example.com',
      addr1: '123 Main St',
    };
    const setValue = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo));
    expect(setValue).toHaveBeenCalledWith('yearDt', '1980');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith('phone', '555-555-5555');
    expect(setValue).toHaveBeenCalledWith('email', 'test@example.com');
    expect(setValue).toHaveBeenCalledWith('currentAddress', '123 Main St');
    expect(setValue).toHaveBeenCalledTimes(6);
  });
})