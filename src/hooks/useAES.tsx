import * as CryptoJS from 'crypto-js';
import { decryptPass, encriptPass } from '../utils';

export default function useAES() {

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
