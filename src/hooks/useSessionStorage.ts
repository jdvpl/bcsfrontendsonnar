import { useState, useEffect } from 'react';
import useAES from './useAES';
const { decryptPass, encriptPass } = useAES();
const KEY = process.env.KEYSESSIONSTORAGE ? process.env.KEYSESSIONSTORAGE : '';

export function getSessionStorageOrDefault(
  key: string,
  defaultValue: Record<string, string> | string
) {
  let stored;
  if (typeof window !== 'undefined') {
    stored = sessionStorage.getItem(key);
  }
  if (!stored) {
    return defaultValue;
  }
  const data = JSON.parse(decryptPass(stored, KEY))
  return data;
}

export function useSessionStorage(
  key: string,
  defaultValue: Record<string, string> | string
) {
  const [value, setValue] = useState(getSessionStorageOrDefault(key, defaultValue));

  useEffect(() => {
    const dataString = JSON.stringify(value);
    const dataEncripted = encriptPass(dataString, KEY);
    sessionStorage.setItem(key, dataEncripted);
  }, [key, value]);

  return [value, setValue];
}
