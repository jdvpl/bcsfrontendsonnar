import { useState, useEffect } from 'react';
import dataOffices from '../lib/officies.json';

export default function useCreditForm({ setOffices }: any) {
  const [choseOffice, setChoseOffice] = useState(true);

  const changeOffice = (value: boolean) => {
    setChoseOffice(value);
  };
  useEffect(() => {
    setOffices(dataOffices);
  }, []);
  return { changeOffice, choseOffice };
}
