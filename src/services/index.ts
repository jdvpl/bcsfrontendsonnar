import axios from 'axios';
import { OTPCodeRequest, ValidateOTC } from '../components/custom/otp';
import { clientAxiosKYC } from '../config/AxiosKYC';
import { clientAxiosBackend } from '../config/AxiosMortgage';
import useAES from '../hooks/useAES';
import { headersBack } from './HeaderBack';
import { headersKYC } from './HeadersKYC';
import { iFormDataSimulation } from '../interfaces';
import { iFormBasicData } from '../interfaces/basicDataProps';

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
// TODO sendQuestions KYC
// export const sendQuestions = async (data: any) => {
//   try {
//     const dataInfo = await allResponse(data, KEY);
//     const { data: response } = await axios.post(
//       // '/customers/answer',
//       'https://e7da-161-18-184-76.ngrok.io/composer/answer',
//       { data: dataInfo },
//       headersKYC
//     );
//     return {
//       response: {
//         result: response.result,
//         data: await allResponseDecrypted(response.data, KEY),
//       },
//       error: false,
//     };
//   } catch (e: any) {
//     return { error: true, response: e.response.data };
//   }
// };
export const sendQuestions = async (data: any) => {
  try {
    const { data: response } = await axios.post(
      'https://51e3-179-1-129-55.ngrok.io/api/users/answer',
      data,
      headersKYC
    );
    return {
      response: {
        // result: response.result,
        data: response,
      },
      error: false,
    };
  } catch (e: any) {
    console.log(e)
    return { error: true, response: e.response.data };
  }
}
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
    const { data: response } = await axios.post(
      'http://localhost:7000/api/users/basic-data',
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
    const { data: response } = await clientAxiosBackend.post(
      '/sarlaft/sarlaft-questions',
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
export const sendAuthorization = async (body: any) => {
  try {
    const { data: response } = await axios.post(
      'https://e5897c23-d1ed-438c-9c84-74ae24568d56.mock.pstmn.io/v1/send-authorization',
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
