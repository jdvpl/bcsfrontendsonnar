import React, { useState } from 'react';
import router from 'next/router';

export function useReviewApplication(insuranceCheck: boolean) {
  const [insurance, setInsurance] = useState<Boolean>(insuranceCheck);
  const handleInsurance = () => {
    setInsurance(false);
  };
  const goBack = () => {
    router.back();
  };
  return { insurance, handleInsurance, goBack };
}
