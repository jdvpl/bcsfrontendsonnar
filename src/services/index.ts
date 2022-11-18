import { OTPCodeRequest, ValidateOTC } from '../components/custom/otp';
import { clientAxiosKYC } from '../config/AxiosKYC';
import { clientAxiosBackend } from '../config/AxiosMortgage';
import useAES from '../hooks/useAES';
import { headersBack } from './HeaderBack';
import { headersKYC } from './HeadersKYC';
import { iFormDataSimulation } from '../interfaces'
import axios from 'axios';
const { allResponse, allResponseDecrypted } = useAES();
const KEY = process.env.KEYKYCHASH;
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
    return { error: true, response: e.response?.data?.message };
  }
};
/**
 * It takes in a data object, encrypts it, sends it to the server, and then decrypts the response
 * @param {any} data - The data to be sent to the server.
 * @returns {
 *   response: {
 *     result: response.result,
 *     data: await allResponseDecrypted(response.data, KEY),
 *   },
 *   error: false,
 * }
 */
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
export const reSendOTPCode = async (data: OTPCodeRequest) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosKYC.post(
      '/identity-user/resend',
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
export const sendSimulationData = async (data: iFormDataSimulation) => {
  try {
    const { data: response } = await clientAxiosBackend.post(
      '/simulation',
      data,
      headersBack
    );
    return {
      response: {
        data: response,
      },
      error: false,
    };
  } catch (e: any) {
    console.log(e);
    return { error: true, response: e?.response?.data?.message };
  }
};
export const getDataPDF = async (data: iFormDataSimulation) => {
  try {
    const { data: response } = await axios.post(
      // 'https://63753d9548dfab73a4f56dd5.mockapi.io/v1/generatepdf',
      'http://localhost:7000/api/users',
      { data },
      headersBack
    );
    return {
      response: {
        data: response,
      },
      error: false,
    };
  } catch (e: any) {
    console.log(e)
    return { error: true, response: e?.response?.data?.message };
  }
};




