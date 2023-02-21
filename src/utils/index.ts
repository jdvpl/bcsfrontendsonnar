import { differenceInYears, parse } from 'date-fns';
import * as CryptoJS from 'crypto-js';
import { SesionStorageKeys } from '../session';
import { getSessionStorageOrDefault } from '../hooks/useSessionStorage';
import { AxiosError, AxiosInstance } from 'axios';
import Router from 'next/router';
import cities from '../lib/cities.json';
import { months } from '../lib/dates';
import {
  maxHouseValueNoVis,
  maxHouseValueVis,
  minHouseValueNoVis,
  minHouseValueVis,
  SMMLV,
} from '../lib/simulator';

export const clearSessionStorage = () => {
  sessionStorage.clear();
};
export const convertToColombianPesos = (value: any) => {
  const peso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
  if (
    value === 0 ||
    value === undefined ||
    value === '0' ||
    value === '00' ||
    value === '' ||
    Number.isNaN(value)
  )
    return '';
  return peso.format(value);
};
export const calculateAge = (dob: string): number => {
  const date = parse(dob, 'dd/MM/yyyy', new Date());
  return differenceInYears(new Date(), date);
};
export const parserPercentageDecimal = (number: number) =>
  Math.round((number + Number.EPSILON) * 100) / 100;
export const validateAddress = (Address: string) => {
  let haveNumber = /\d/;
  let pattern = /[a-zA-Z!@#$%^&*()_+=-]/;
  if (Address !== '') {
    if (Address?.length > 40) {
      return {
        isError: true,
        message: 'La direccion no puede superar los 40 caracteres',
      };
    }
    if (!haveNumber.test(Address)) {
      return {
        isError: true,
        message: 'La direccion debe contener almenos un numero',
      };
    }
    if (!pattern.test(Address)) {
      return {
        isError: true,
        message: 'La direccion debe contener caracteres ',
      };
    }
  }
  return {
    isError: false,
    message: '',
  };
};
export const isValidDate = (year: number, month: number, day: number): boolean => {
  let date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day
  );
};
export const decryptPass = (password: string, key: string) => {
  const bytes = CryptoJS.AES.decrypt(password, key);
  if (bytes.sigBytes < 0) {
    throw new Error('Invalid credentials');
  }
  return bytes.toString(CryptoJS.enc.Utf8);
};
export const encriptPass = (password: string, key: string) =>
  CryptoJS.AES.encrypt(password, key).toString();

export const getProcessId = () => {
  const { processId } = getSessionStorageOrDefault(
    SesionStorageKeys.DataQuestions.key,
    'null'
  );
  return processId;
};

export const axiosErrorMiddleware = (axiosInstance: AxiosInstance) => {
  return (error: AxiosError) => {
    if (error?.response?.status !== 200) {
      if (error?.response?.status === 500) {
        Router.push('/validacion/error-servicio');
      }
    }
    return Promise.reject(error);
  };
};

export const renderPercentage = (percentageFinance: any) => {
  if (Math.floor(percentageFinance * 100) > 100) {
    return `> 100`;
  }
  return Math.floor(percentageFinance * 100);
};
export const getCityById = (id: string) => {
  const city = cities.details.filter((element) => element.id == id)[0]?.name;
  return city;
};

export const handleClearErrors = (clearErrors: any) => {
  clearErrors('typeHouse');
  clearErrors('houseValue');
  clearErrors('financeValueE');
  clearErrors('termFinance');
  clearErrors('day');
  clearErrors('month');
  clearErrors('year');
};

export const validateTypeHouse = (houseValue: any, typeHouse: string, setError: any) => {
  if (
    (houseValue < minHouseValueVis || houseValue > maxHouseValueVis) &&
    typeHouse === 'vis' &&
    houseValue > 0
  ) {
    setError('typeHouse', {
      type: 'error',
      message: 'El valor de la vivienda VIS debe estar entre 50 y 150 SMMLV.',
    });
  }
  if (houseValue < minHouseValueNoVis && typeHouse === 'novis' && houseValue > 0) {
    setError('typeHouse', {
      type: 'error',
      message: 'El valor mínimo de la vivienda debe ser de 150 SMMLV.',
    });
  }
  if (houseValue > maxHouseValueNoVis && typeHouse === 'novis' && houseValue > 0) {
    setError('typeHouse', {
      type: 'error',
      message: 'El valor de la vivienda máximo debe ser de 1.400 SMMLV.',
    });
  }
};

export const validateAge = (day: string, month: string, year: string, setError: any) => {
  if (day && month && year) {
    const age = calculateAge(`${day}/${month}/${year}`);
    if (age < 19 || age > 71) {
      setError(
        'day',
        {
          type: 'error',
          message: 'Fecha inválida',
        },
        {
          shouldFocus: true,
        }
      );
    }
    if (!isValidDate(parseInt(year), parseInt(month), parseInt(day))) {
      setError(
        'day',
        {
          type: 'error',
          message: 'Fecha inválida',
        },
        {
          shouldFocus: true,
        }
      );
    }
  }
};

export const validateFinanceValue = (
  financeValue: number,
  houseValue: number,
  setError: any
) => {
  if (financeValue > Math.round(houseValue * 0.7) && financeValue > 0) {
    setError('financeValueE', {
      type: 'error',
      message: 'El valor máximo a financiar no puede superar el 70% de la vivienda.',
    });
  }
  if (financeValue < SMMLV * 20 && financeValue > 0) {
    setError('financeValueE', {
      type: 'error',
      message: 'El valor mínimo a financiar para vivienda VIS es de 20 SMMLV.',
    });
  }
};


export const cellPhoneMaked = (number: string | number) => {
  const strNum = number.toString();
  const prefix = strNum.slice(0, 3);
  const suffix = strNum.slice(-2);
  const maskedDigits = '●'.repeat(strNum.length - prefix.length - suffix.length);
  const maskedNum = `${prefix}${maskedDigits}${suffix}`;
  return maskedNum;
}

export const emailMasked = (email: string) => {
  const [username, domain] = email.split('@');
  if (username.length > 3) {
    const prefix = username.slice(0, 3);
    const suffix = username.slice(-1);
    const maskedChars = '●'.repeat(username.length - prefix.length - suffix.length);
    const maskedEmail = `${prefix}${maskedChars}${suffix}@${domain}`;
    return maskedEmail
  } else {
    return email;
  }
}