import axios from 'axios';
import { OTPCodeRequest, ValidateOTC } from '../components/custom/otp';
import { clientAxiosBackend } from '../config/AxiosMortgage';
import { clientAxiosMock } from '../config/AxiosMock';
import useAES from '../hooks/useAES';
import { headersBack } from './HeaderBack';
import { iFormDataSimulation } from '../interfaces';
import { iFormBasicData } from '../interfaces/basicDataProps';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { SesionStorageKeys } from '../session';
const { allResponse, allResponseDecrypted } = useAES();
const KEY = process.env.KEYKYCHASH;
const KEYKYCHASH = process.env.KEYKYCHASH;

//? this save the authorization data.
/**
 * It sends a POST request to the backend with the body of the request being the body parameter
 * @param {any} body - any - the body of the request.
 * @returns An object with two properties: response and error.
 */
export const sendAuthorization = async (body: any) => {
  try {
    const { data: response } = await clientAxiosBackend.post(
      '/customer/data-processing',
      body
    );
    return {
      response: {
        result: response,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data?.message };
  }
};
//? this endpoint get each question from kyc
/**
 * It takes in a data object, encrypts it, sends it to the KYC API, decrypts the response, and returns
 * the decrypted response
 * @param {any} data - The data to be sent to the server.
 * @returns {
 *   response: {
 *     result: response.result,
 *     data: await allResponseDecrypted(response.data, KEY),
 *   },
 *   error: false,
 * }
 */
export const getQuestions = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/api-composer/composer/allow-list',
      { data: dataInfo },
      headersBack
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
// TODO sendQuestions KYC
export const sendQuestions = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosBackend.post(
      // '/customers/answer',
      '/api-composer/composer/answer',
      { data: dataInfo },
      headersBack
    );
    return {
      response: {
        result: response.result,
        data: await allResponseDecrypted(response.data, KEY),
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data };
  }
};
export const loginAccountSendRequest = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosBackend.post(
      // '/customers/answer',
      '/customer/user-auth',
      { data: dataInfo },
      headersBack
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
    const { data: response } = await clientAxiosMock.post(
      '/identity-user/otp',
      { data: dataInfo },
      headersBack
    );
    return {
      response: {
        status: response.status,
        result: response.result,
        data: await allResponseDecrypted(response.data, KEY),
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response.data, status: e.response.status };
  }
};
export const validateOTOCode = async (data: ValidateOTC) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosMock.post(
      '/identity-user/pin',
      { data: dataInfo },
      headersBack
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
    const { data: response } = await clientAxiosMock.post(
      '/identity-user/resend',
      { data: dataInfo },
      headersBack
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
      '/simulator/simulator',
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
    return { error: true, response: e?.response?.data?.message };
  }
};
export const getDataPDF = async (data: iFormDataSimulation) => {
  try {
    const { data: response } = await clientAxiosBackend.post(
      '/simulator/simulator/generatepdf',
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
    return { error: true, response: e?.response?.data?.message };
  }
};
export const getBasicData = async (data: iFormBasicData) => {
  try {
    const { data: response } = await clientAxiosMock.post(
      '/basic-data',
      data,
    );
    return {
      response: {
        data: response,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e?.response?.data?.message };
  }
};

export const fetchSarlaft = async (body: any) => {
  try {
    const bodyencript = await allResponse(body, KEYKYCHASH)
    const { data: response } = await clientAxiosBackend.post(
      '/sarlaft/sarlaft-questions',
      { data: bodyencript }
    );
    const data = await allResponseDecrypted(response.data, KEYKYCHASH)
    return {
      response: {
        result: data,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data?.message };
  }

};


export const riskBoxes = async (body: any) => {
  try {
    const { data: response } = await axios.post(
      'https://63a9fbb57d7edb3ae61dd65b.mockapi.io/v1/send-authorization',
      body
    );
    return {
      response: {
        result: response,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data?.message };
  }

};

export const getOffices = async () => {
  try {
    const { data: response } = await clientAxiosMock.get(
      '/offices',
    );
    return {
      response: {
        result: response?.response,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data?.message };
  }

};

export const delKeysRedis = async (body: any) => {
  try {
    const { data: response } = await clientAxiosBackend.post(
      'commons/delete-keys',
      body
    );
    return {
      response: {
        result: response?.response,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data?.message };
  }

}


