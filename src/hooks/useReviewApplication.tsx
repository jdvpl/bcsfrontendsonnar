import { useState } from 'react';
import { routes } from '../routes';
import { riskBoxes } from '../services/index';
import { SesionStorageKeys } from '../session';
import { useSessionStorage } from './useSessionStorage';

export default function useSummaryApplication(router: any, setCurrentRouting: any) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data] = useSessionStorage(SesionStorageKeys.mortgageValues.key, {});

  const onSubmit = async () => {
    setLoading(true);
    setCurrentRouting(routes.approvalDataPage);
    router?.push(routes.approvalDataPage);
    setLoading(false);
  };

  return { isLoading, onSubmit, router };
}
