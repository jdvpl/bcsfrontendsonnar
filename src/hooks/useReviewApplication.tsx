import { useRouter } from 'next/router';
import { useState } from 'react';
import { routes } from '../routes';
import { riskBoxes } from '../services/index';

export default function useSummaryApplication() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async () => {
    setLoading(true);
    const response = await riskBoxes({});
    if (!response.error) {
      router.push(routes.approvalDataPage);
      setLoading(false);
    }
    setLoading(false);
  };

  return { isLoading, onSubmit, router };
}
