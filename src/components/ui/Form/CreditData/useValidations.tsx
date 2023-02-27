import React, { useEffect } from 'react';
import {
  maxHouseValueNoVis,
  maxHouseValueVis,
  minHouseValueNoVis,
  minHouseValueVis,
  SMMLV,
} from '../../../../lib/simulator';
import { routes } from '../../../../routes';
import { riskBoxes } from '../../../../services';
import { calculateAge } from '../../../../utils';

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
  setCurrentRouting: any
) {
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
    });

    setCurrentRouting(routes.ResumenSolicitud);
    router.push(routes.ResumenSolicitud);
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
