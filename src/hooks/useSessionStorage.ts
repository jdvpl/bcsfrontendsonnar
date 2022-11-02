import { useState, useEffect } from 'react';

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
  return JSON.parse(stored);
}

export function useSessionStorage(
  key: string,
  defaultValue: Record<string, string> | string
) {
  const [value, setValue] = useState(getSessionStorageOrDefault(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
