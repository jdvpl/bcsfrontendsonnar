import { clientAxiosKYC } from '../config/AxiosKYC';
import useAES from '../hooks/useAES';
import { headersKYC } from './HeadersKYC';

const { allResponse } = useAES();
const KEY = process.env.KEY_KYC_HASH;

export const getQuestions = async (data: any) => {
  try {
    const { data: response } = await clientAxiosKYC.post(
      '/customers/allow-lists',
      allResponse(data, KEY),
      headersKYC
    );
    return { response, error: false };
  } catch (e: any) {
    return { error: true, response: e.response.data.message };
  }
};
