import { useEffect } from 'react';

import { iFormDataSimulation, SimulationData } from '../../../../interfaces';
import {
  calculateAge,
  handleClearErrors,
  isValidDate,
  validateAge,
  validateFinanceValue,
  validateTypeHouse,
} from '../../../../utils';
import { routes } from '../../../../routes';
import { sendSimulationData } from '../../../../services';
import { useRouter } from 'next/router';
import { invokeEvent } from '../../../../utils/index';

export default function useHouseSimulator({
  typeHouse,
  houseValue,
  financeValue,
  termFinance,
  calculatePercentageFinance,
  day,
  month,
  year,
  clearErrors,
  setError,
  setIsLoading,
  percentageFinance,
  insuranceCheck,
  setDataFormResponse,
  setDataFormQuota,
}: any) {
  const router = useRouter();

  const onSubmit = async (formData: SimulationData) => {
    setIsLoading(true);
    const city=formData.city?.option;
    const body: iFormDataSimulation = {
      typeHouse: formData?.typeHouse,
      houseValue: Math.floor(formData.houseValue),
      financeValue: Math.floor(formData.financeValue),
      termFinance: formData?.termFinance,
      percentageFinance,
      insuranceCheck,
      dateOfBirth: `${year}-${month}-${day}`,
      simulationType: 'house',
      monthlySalary: 0,
      amountQuota: 0,
      percentageQuota: 0.3,
      city: city,
      gender: formData.gender,
      stratum: formData.stratum
    };
    const response = await sendSimulationData(body);
    if (!response.error) {
      invokeEvent('simulate_by_house_value','action_funnel');
      router.push(routes.simuladorResumen);
      setDataFormResponse(response?.response?.data);
      setDataFormQuota(body);
    }else{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleClearErrors(clearErrors);
    validateTypeHouse(houseValue, typeHouse, setError);
    validateFinanceValue(financeValue, houseValue, setError);
    calculatePercentageFinance();
    validateAge(day, month, year, setError);
  }, [typeHouse, houseValue, financeValue, termFinance, day, month, year]);

  return { onSubmit };
}
