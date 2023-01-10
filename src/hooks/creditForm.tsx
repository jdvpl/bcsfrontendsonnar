import { useState, useEffect } from 'react';
import { getOffices } from '../services/index';
import dataOffices from '../lib/cities.json';

export default function creditForm({ setOffices }: any) {
  const [choseOffice, setChoseOffice] = useState(false);

  const changeOffice = (value: boolean) => {
    setChoseOffice(value);
  };
  useEffect(() => {
    getOffices().then((response) => {
      if (!response.error) {
        setOffices(response?.response?.result);
      } else {
        setOffices(dataOffices);
      }
    });
  });
  return { changeOffice, choseOffice };
}
