import { useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';
import { SesionStorageKeys } from '../session';
import {delKeysRedis} from "../services/index"

export default function useDeleteKeys() {
    const [dataUser, setDataUser] = useSessionStorage(
        SesionStorageKeys.dataUser.key,
        {}
      );
  useEffect(() => {
    const data = {...dataUser}
    const body = {
        document_type: data?.document_type,
        document_number: data?.document_number,
      };
    {
        data?.document_number ?
        delKeysRedis(body):null
    }
    sessionStorage.clear()
  
  });
}
