import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSessionStorage } from './useSessionStorage';
import { routes } from '../routes';
import { fetchSarlaft } from '../services';
import { SesionStorageKeys } from '../session';
import { invokeEvent } from '../utils';

export default function useMoneyLaundering({ setCurrentRouting }: any) {
  const router = useRouter();
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [moneyLaundering, setMoneyLaundering] = useState<any>({
    incomeSource: true,
    isPep: false,
    legalRepresentation: false,
  });

  const changeMoneyLaundering = (name: string, value: boolean) => {
    setMoneyLaundering({ ...moneyLaundering, [name]: value });
  };
  const onSubmit = async () => {
    const body = {
      documentType: dataTU?.document_type,
      documentNumber: dataTU?.document_number,
      data: {
        ...moneyLaundering,
      },
    };
    const response = await fetchSarlaft(body);

    if (!response?.error) {
      switch (response.response.result.customer_status) {
        case 'ALLOWED':
          setCurrentRouting(routes.personalData, false);
          setCurrentRouting(routes.sarlaft, false);
          setCurrentRouting(routes.finalcialData);
          invokeEvent('go_financial_data','action_funnel');
          router.push(routes.finalcialData);
          break;
        case 'RESTRICTED':
          router.push(routes.errorCreditBankApplication);
          break;
        default:
          router.push(routes.errorValidacion);
          break;
      }
    } else {
      router.push(routes.errorValidacion);
    }
  };
  return { moneyLaundering, changeMoneyLaundering, onSubmit };
}
