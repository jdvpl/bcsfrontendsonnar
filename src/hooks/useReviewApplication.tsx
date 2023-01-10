import { useState } from 'react';
import { routes } from '../routes';
import { riskBoxes } from '../services/index';
import { SesionStorageKeys } from '../session';
import { useSessionStorage } from './useSessionStorage';

export default function useSummaryApplication(router: any) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setDataForm] = useSessionStorage(SesionStorageKeys.mortgageValues.key, {});

  const onSubmit = async () => {
    setLoading(true);
    const response = await riskBoxes(data);
    if (!response.error) {
      router.push(routes.approvalDataPage);
      setLoading(false);
    }
    setLoading(false);
  };

  return { isLoading, onSubmit, router };
}
