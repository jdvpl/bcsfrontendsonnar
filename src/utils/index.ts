import { differenceInYears, parse } from 'date-fns';
import * as CryptoJS from 'crypto-js';

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