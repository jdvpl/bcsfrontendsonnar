import React from 'react';

import * as CryptoJS from 'crypto-js';

export default function useAES() {
  const encriptPass = (password: string, key: string) => {
    return CryptoJS.AES.encrypt(password, key).toString();
  };

  const decryptPass = (password: string, key: string) => {
    const bytes = CryptoJS.AES.decrypt(password, key);

    if (bytes.sigBytes < 0) {
      throw new Error('Invalid credentials');
    }

    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const hashKey = (keyString: string) => {
    const hash = CryptoJS.SHA256(keyString);

    return hash.toString(CryptoJS.enc.Hex);
  };
  const allResponse = async (data: any, keys: any) => {
    const dataToString = JSON.stringify(data);

    const dataEncrypted = encriptPass(dataToString, keys);

    return dataEncrypted;
  };

  const allResponseDecrypted = (data: any, keys: any) => {
    const dataDecrypted = decryptPass(data, keys);

    return JSON.parse(dataDecrypted);
  };
  return { decryptPass, encriptPass, hashKey, allResponseDecrypted, allResponse };
}
