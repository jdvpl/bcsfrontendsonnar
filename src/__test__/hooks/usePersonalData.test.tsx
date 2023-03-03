import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import usePersonalData from '../../hooks/usePersonalData'
import { createMockRouter } from '../utils/createMockRouter';
import { cellPhoneMaked, emailMasked } from '../../utils';
import { iDataUser, iPersonalData, iPersonalDataSent } from '../../interfaces/dataUserBasic';


const setCurrentRouting = jest.fn()
describe('usePersonalData', () => {
  const router = createMockRouter({});
  const setData = jest.fn();
  it('divides the birth date into year, month, and day', () => {
    const setValue = jest.fn();
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '123456789',
      email: 'test@example.com',
      address: '123 Main St',
      birthCity: '11001',
      residenceCity: '11001',
      firstName: '',
      isClient: false
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };

    renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData, setCurrentRouting, dataPersonalBasic));

    expect(setValue).toHaveBeenCalledWith('yearDt', '2000');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith("email", dataPersonalBasic.email)
  })

  it('sets the phone, email, and current address values', () => {
    const setValue = jest.fn();
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '123456789',
      email: 'juanda55@example.com',
      birthCity: '11001',
      residenceCity: '11001',
      address: '',
      firstName: '',
      isClient: false
    };

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };

    const setError = jest.fn();
    const clearErrors = jest.fn();

    renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData, setCurrentRouting, dataPersonalBasic));

    expect(setValue).toHaveBeenCalledWith('phone', cellPhoneMaked('123456789'));
    expect(setValue).toHaveBeenCalledWith('email', emailMasked(userInfo.email));
  });
  it('splits the birth date and sets values in the state', () => {
    const userInfo: iDataUser = {
      birthDay: '1980-01-01',
      cellPhone: '5555555555',
      email: 'juanda55@example.com',
      address: '123 Main St',
      birthCity: '',
      firstName: '',
      isClient: false,
      residenceCity: '',
    };

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };
    const setValue = jest.fn();
    const setError = jest.fn();
    const clearErrors = jest.fn();
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData, setCurrentRouting, dataPersonalBasic));
    expect(setValue).toHaveBeenCalledWith('yearDt', '1980');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith('phone', cellPhoneMaked('5555555555'));
    expect(setValue).toHaveBeenCalledWith('email', emailMasked(userInfo.email));
    expect(setValue).toHaveBeenCalledTimes(13);
  });
  it('should set error if calculated age is less than 19 or greater than 71', () => {
    const setValue = jest.fn();
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '',
      email: '',
      address: '',
      birthCity: '',
      firstName: '',
      isClient: false,
      residenceCity: ''
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '01', '01', '1800', router, setData, setCurrentRouting, dataPersonalBasic));

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
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '',
      email: '',
      address: '',
      birthCity: '',
      firstName: '',
      isClient: false,
      residenceCity: ''
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };

    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '32', '01', '2000', router, setData, setCurrentRouting, dataPersonalBasic));

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
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '',
      email: '',
      address: '',
      birthCity: '',
      firstName: '',
      isClient: false,
      residenceCity: ''
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '01', '01', '1800', router, setData, setCurrentRouting, dataPersonalBasic));

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
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '123456789',
      email: 'example56@example.com',
      address: '123 Main St',
      birthCity: '',
      firstName: '',
      isClient: false,
      residenceCity: ''
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    const dataPersonalBasic = { "birthDate": "1995-05-27", "birthCity": "11001", "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3156231770", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "EDISSONHSL@GMAIL.COM" };
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '02', '01', '2000', router, setData, setCurrentRouting, dataPersonalBasic));

    expect(setValue).toHaveBeenCalledWith('yearDt', '2000');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith('phone', cellPhoneMaked('123456789'));
    expect(setValue).toHaveBeenCalledWith('email', emailMasked('example56@example.com'));
  });
  it('should have called the method onSubmit ', async () => {
    const setValue = jest.fn();
    const userInfo: iDataUser = {
      birthDay: '2000-01-01',
      cellPhone: '123456789',
      email: 'juanda554242@example.com',
      address: 'CL 69g#67-62',
      birthCity: '11001',
      firstName: 'Juan',
      isClient: true,
      residenceCity: '11001'
    };
    const setError = jest.fn();
    const clearErrors = jest.fn();

    const dataPersonalBasic = { "birthDate": "2000-01-01", "birthCity": undefined, "currentCity": "11001", "hasAdviser": true, "nameAdviser": "CARLOS ALBERTO VARGAS/DIEGO PULIDO/JEIMMY CAROLINA USECHE/JONNATHAN ALEJANDRO NEIRA/CAROLINA ALVAREZ/GIOVANI TOVAR/RAUL GONZALEZ", "phone": "3209188638", "gender": "male", "currentAddress": "CL 69g#67-62", "email": "juanda554242@gmail.com" };
    const { result } = renderHook(() => usePersonalData(setValue, userInfo, setError, clearErrors, '02', '01', '2000', router, setData, setCurrentRouting, dataPersonalBasic));

    const personalData: iPersonalData = {
      monthDt: '01',
      yearDt: '2000',
      dayDt: '01',
      birthCity: "11001",
      gender: 'male',
      phone: '3209188638',
      email: 'juanda554242@gmail.com',
      currentCity: "11001",
      currentAddress: 'Cra 7#10-37'
    }
    await result.current.onSubmit(personalData)
    expect(setValue).toHaveBeenCalledWith('yearDt', '2000');
    expect(setValue).toHaveBeenCalledWith('monthDt', '01');
    expect(setValue).toHaveBeenCalledWith('dayDt', '01');
    expect(setValue).toHaveBeenCalledWith('phone', cellPhoneMaked('123456789'));
    expect(setValue).toHaveBeenCalledWith('email', emailMasked('juanda554242@example.com'));
    expect(setData).toHaveBeenCalledWith(dataPersonalBasic)

  });
})