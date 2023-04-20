import { differenceInYears, parse } from 'date-fns';
import * as CryptoJS from 'crypto-js';
import { SesionStorageKeys } from '../session';
import { getSessionStorageOrDefault } from '../hooks/useSessionStorage';
import cities from '../lib/cities.json';

import {
  maxHouseValueNoVis,
  maxHouseValueVis,
  minHouseValueNoVis,
  minHouseValueVis,
  SMMLV,
} from '../lib/simulator';
import TagManager from 'react-gtm-module';
import { routes } from '../routes';

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
export const getHasAdviserNameAdviser = (id: string) => {
  const data = cities.details.filter((element) => element.id == id)[0];
  return {
    hasAdviser: data.hasAdviser,
    nameAdviser: data.nameAdviser,
  };
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

export const calculatePercentageFinance = (
  houseValue: number,
  financeValue: number,
  setPercentageFinance: any
) => {
  if (houseValue > 0 && financeValue > 999999) {
    const calculatePercentage = financeValue / houseValue;
    setPercentageFinance(calculatePercentage);
  }
};

export const cellPhoneMaked = (number: string | number) => {
  const strNum = number?.toString();
  if (strNum?.length > 0) {
    const prefix = strNum.slice(0, 3);
    const suffix = strNum.slice(-2);
    const maskedDigits = '●'.repeat(strNum.length - prefix.length - suffix.length);
    const maskedNum = `${prefix}${maskedDigits}${suffix}`;
    return maskedNum;
  } else {
    return number;
  }
};

export const emailMasked = (email: string) => {
  if (email?.length > 3) {
    const [username, domain] = email.split('@');
    const prefix = username.slice(0, 3);
    const suffix = username.slice(-1);
    const maskedChars = '●'.repeat(username.length - prefix.length - suffix.length);
    const maskedEmail = `${prefix}${maskedChars}${suffix}@${domain}`;
    return maskedEmail;
  } else {
    return email;
  }
};

export const downLoadPdf = (pdf: any, name: string) => {
  invokeEvent('download_pre_approved _letter', 'action_funnel');
  const linkSource = `data:application/pdf;base64,${pdf}`;
  const downloadLink = document.createElement('a');
  const fileName = `${name}.pdf`;
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

export const calculateAgeMethod2 = (dob: string): number => {
  var hoy = new Date();
  var cumpleanos = new Date(dob);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
};

export const invokeEvent = (event: string, category: string) => {
  TagManager.dataLayer({
    dataLayer: {
      event: event,
      category: category,
      action: event,
      label: event,
    },
  });
};

export const parsePathToEvent = (path: string) => {
  const event = {
    [routes.simulador]: 'go_simulator',
    [routes.consultancy]: 'go_guide',
    [routes.onboarding]: 'go_welcome',
  };
  return event[path];
};

export const parseOfficeName = (option: any) => {
  return `${option?.address
    ?.toLowerCase()
    .replace(/\b\w/g, (l: string) => l.toUpperCase())} ${option?.nameOffice
      ?.toLowerCase()
      .replace(/\b\w/g, (l: string) => l.toUpperCase())} - ${option?.city
        ?.toLowerCase()
        .replace(/\b\w/g, (l: string) => l.toUpperCase())}`;
};

export const handlerCity = (e: any, onChange: any) => {
  if (e?.id) {
    return onChange({ name: e.name, id: e.id });
  }
  return onChange(undefined);
};
export const handlerInput = (e: any, setValue: any) => {
  setValue(e?.target?.name, e?.target?.value);
};


export const parseOffice = (office:any) => {
  return `${office?.address?.toLowerCase().replace(/\b\w/g, (l: string) =>l.toUpperCase())} - ${office?.city?.toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())}`
}