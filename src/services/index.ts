import { ValidateOTC } from '../components/custom/otp';
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
    return { error: true, response: e.response.data.message };
  }
};
export const sendQuestions = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosKYC.post(
      '/customers/answer',
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
    return { error: true, response: e.response.data };
  }
};
export const sendNumber = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosKYC.post(
      '/identity-user/otp',
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
    return { error: true, response: e.response.data };
  }
};
export const validateOTOCode = async (data: ValidateOTC) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosKYC.post(
      '/identity-user/pin',
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
    return { error: true, response: e?.response?.data?.message };
  }
};