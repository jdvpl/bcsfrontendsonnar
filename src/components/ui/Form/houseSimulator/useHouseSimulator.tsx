import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
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
    TagManager.dataLayer({
      dataLayer: {
        event: 'go_simulator',
        category: 'action_funnel',
        action: 'go_simulator',
        label: 'go_simulator',
      },
    });
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
    };
    const response = await sendSimulationData(body);
    if (!response.error) {
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
