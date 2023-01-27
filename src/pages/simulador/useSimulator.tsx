import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session/index';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { iFormDataSimulation } from '../../interfaces/formSimulation';
import { sendSimulationData } from '../../services/index';
import { routes } from '../../routes';

export default function useSimulator() {
  const [dataFormQuota, setdataFormQuota] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    {}
  );
  const [, setdataFormResponse] = useSessionStorage(
    SesionStorageKeys.dataFormSimulationResponse.key,
    {}
  );

  const router = useRouter();
  const [simulatioTypeOption, setsimulatioTypeOption] = useState<'house' | 'salary'>(
    'house'
  );
  const onSubmit = async (formData: iFormDataSimulation) => {
    const body: iFormDataSimulation = {
      simulationType: simulatioTypeOption,
      typeHouse: formData.typeHouse,
      termFinance: formData.termFinance,
      insuranceCheck: true,
      dateOfBirth: formData.dateOfBirth,
      monthlySalary: +formData.monthlySalary,
      amountQuota: +formData.amountQuota,
      percentageQuota: formData.percentageQuota,
      houseValue: 0,
      percentageFinance: 0,
      financeValue: 0,
    };
    setdataFormQuota(body);
    const response = await sendSimulationData(body);
    if (!response.error) {
      setdataFormResponse(response.response.data);
      router.push(routes.simuladorResumen);
    }
  };

  return { simulatioTypeOption, setsimulatioTypeOption, onSubmit };
}
