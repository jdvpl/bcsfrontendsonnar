import { clientAxiosKYC } from '../config/AxiosKYC';
import useAES from '../hooks/useAES';
import { headersKYC } from './HeadersKYC';

const { allResponse, allResponseDecrypted } = useAES();
const KEY = process.env.KEY_KYC_HASH;

export const getQuestions = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosKYC.post(
      '/customers/allow-lists',
      { data: dataInfo },
      headersKYC
    );
    return {
      response: {
        result: response.result,
        data: await allResponseDecrypted(response.data, KEY),
      },
      error: false,
    };
  } catch (e: any) {
    console.log(e);
    return { error: true, response: e.response.data.message };
  }
};
