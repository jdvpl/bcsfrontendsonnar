import { useEffect } from 'react';
import {
  maxHouseValueNoVis,
  maxHouseValueVis,
  minHouseValueNoVis,
  minHouseValueVis,
  SMMLV,
} from '../lib/simulator';
import { iCreditData } from '../interfaces/iCreditData';
import { useSessionStorage } from './useSessionStorage';
import { SesionStorageKeys } from '../session';
import { calculateAgeMethod2 } from '../utils';
import { riskBoxes } from '../services';
import { routes } from '../routes';

export default function useValidations(
  typeHouse: string,
  houseValue: number,
  financeValue: number,
  termFinance: number,
  clearErrors: any,
  setError: any,
  setPercentageFinance: any,
  setValue: any,
  setDataForm: any,
  houseStatus: any,
  insuranceCheck: any,
  choseOffice: any,
  office: any,
  stratum: any,
  router: any,
  errors: any,
  setCurrentRouting: any,
  mortgageValues: Partial<iCreditData>,
  amortizationType: any
) {
  const [financialDataForm] = useSessionStorage(
    SesionStorageKeys?.financialDataForm.key,
    {}
  );
  const [dataBasicData] = useSessionStorage(SesionStorageKeys?.dataBasicData.key, {});
  const [dataTu] = useSessionStorage(SesionStorageKeys?.dataUser.key, {});
  const [, setApplicationResponse] = useSessionStorage(
    SesionStorageKeys?.applicationResponse.key,
    {}
  );

  const handleClearErrors = () => {
    clearErrors('typeHouse');
    clearErrors('houseValue');
    clearErrors('financeValueE');
    clearErrors('termFinance');
    clearErrors('day');
    clearErrors('month');
    clearErrors('year');
  };

  const validateTypeHouse = () => {
    let message: any;

    if (typeHouse === 'vis') {
      if (houseValue < minHouseValueVis || houseValue > maxHouseValueVis) {
        message = 'El valor de la vivienda VIS debe estar entre 50 y 150 SMMLV.';
      }
    } else if (typeHouse === 'novis') {
      if (houseValue < minHouseValueNoVis) {
        message = 'El valor mínimo de la vivienda debe ser de 150 SMMLV.';
      } else if (houseValue > maxHouseValueNoVis) {
        message = 'El valor de la vivienda máximo debe ser de 1.400 SMMLV.';
      }
    }
    if (message && houseValue > 0) {
      setError('typeHouse', {
        type: 'error',
        message,
      });
    }
  };

  const validatefinanceValue = () => {
    if (financeValue > Math.round(houseValue * 0.7) && financeValue > 0) {
      setError('financeValueE', {
        type: 'error',
        message: 'El valor máximo a financiar no puede superar el 70% de la vivienda.',
      });
    }
    if (financeValue < SMMLV * 20 && financeValue > 0) {
      setError('financeValueE', {
        type: 'error',
        message: 'El valor mínimo a financiar para vivienda es de 20 SMMLV.',
      });
    }
  };

  const calculatePercentageFinance = () => {
    if (houseValue > 0 && financeValue > 999999) {
      const calculatePercentage = financeValue / houseValue;
      setPercentageFinance(calculatePercentage);
    }
  };

  const automationFinanceValue = (value: number) => {
    if (value > 0) {
      setValue('financeValue', Math.round(value * 0.7));
    } else {
      setValue('financeValue', 0);
    }
  };
  useEffect(() => {
    if (Object.entries(mortgageValues).length > 0) {
      setValue('typeHouse', mortgageValues.typeHouse);
      setValue('houseStatus', mortgageValues.houseStatus);
      setValue('houseValue', mortgageValues.houseValue);
      setValue('financeValue', mortgageValues.financeValue);
      setValue('termFinance', mortgageValues.termFinance);
      setValue('choseOffice', mortgageValues.choseOffice);
      setValue('office', mortgageValues.office);
      setValue('stratum', mortgageValues.stratum);
    }
  }, []);

  useEffect(() => {
    handleClearErrors();
    validatefinanceValue();
    calculatePercentageFinance();
    validateTypeHouse();
  }, [houseValue, financeValue, termFinance, typeHouse]);

  const onSubmit = async () => {
    // eslint-disable-next-line no-console
    setDataForm({
      typeHouse,
      houseStatus,
      houseValue,
      financeValue,
      termFinance,
      insuranceCheck,
      choseOffice,
      office,
      stratum,
      amortizationType,
    });

    const body = {
      creditData: {
        typeHouse,
        houseStatus,
        houseValue,
        financeValue,
        termFinance,
        insuranceCheck,
        choseOffice,
        office,
        stratum,
      },
      financialData: {
        ...financialDataForm,
        contractType: financialDataForm?.contractType || '',
        employeeYear: financialDataForm?.employeeYear || '',
        employeeMonth: financialDataForm?.employeeMonth || '',
      },
      personalData: {
        middleName: '',
        secondLastName: '',
        ...dataBasicData,
        age: calculateAgeMethod2(dataBasicData?.birthDate),
      },
      dataTu,
    };

    const data: any = await riskBoxes(body);
    console.log(data);

    if (!data?.response?.error) {
      setApplicationResponse({ data });
      setCurrentRouting(routes.finalcialData, false);
      setCurrentRouting(routes.creditData, false);
      setCurrentRouting(routes.ResumenSolicitud);
      router.push(routes.ResumenSolicitud);
    }
  };

  const isValid = () => {
    let formIsValid = !(Object.entries(errors).length === 0);
    const body = {
      typeHouse,
      houseValue,
      financeValue,
      termFinance,
      insuranceCheck,
      choseOffice,
      office,
      stratum,
    };

    var values = Object.values(body);
    for (var i = 0; i < values.length; i++) {
      if (
        (values[i] === null ||
          values[i] === undefined ||
          values[i] === '' ||
          values[i] === 0) &&
        choseOffice === true
      ) {
        formIsValid = true;
        break;
      } else if (
        (values[i] === null ||
          values[i] === undefined ||
          values[i] === '' ||
          values[i] === 0) &&
        i !== 6
      ) {
        formIsValid = true;
      }
    }
    return formIsValid;
  };

  return {
    handleClearErrors,
    validateTypeHouse,
    validatefinanceValue,
    calculatePercentageFinance,
    automationFinanceValue,
    onSubmit,
    isValid,
  };
}
