import { useRouter } from 'next/router';
import { useState } from 'react';
import { basePath } from '../../next.config';
import { useSessionStorage } from './useSessionStorage';
import { routes } from '../routes';
import { fetchSarlaft } from '../services';
import { SesionStorageKeys } from '../session';

export default function useMoneyLaundering() {
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
          router.push(routes.finalcialData);
          break;
        case 'RESTRICTED':
          router.push(routes.errorValidacion);
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
