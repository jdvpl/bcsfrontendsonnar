import { OTPCodeRequest, ValidateOTC } from '../components/custom/otp';
import { clientAxiosBackend } from '../config/AxiosMortgage';
import useAES from '../hooks/useAES';
import { headersBack } from './HeaderBack';
import { iFormDataSimulation } from '../interfaces';
import { getProcessId } from '../utils';
const { allResponse, allResponseDecrypted } = useAES();
import { iPdfLetter } from '../interfaces/ipdfLetter';
import { RequestRiskBoxes } from '../interfaces/IRequestRiskBoxes';
const KEY = process.env.KEYENCRYPTADIGITAL;

//? this save the authorization data.
/**
 * It sends a POST request to the backend with the body of the request being the body parameter
 * @param {any} body - any - the body of the request.
 * @returns An object with two properties: response and error.
 */
export const sendAuthorization = async (body: any) => {
  try {
    const dataInfo = await allResponse({ ...body, processId: 'solicitud-inicial' }, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/customer/data-processing',
      { data: dataInfo }
    );
    const infoAllow = await allResponseDecrypted(response.data, KEY);
    return {
      response: {
        result: infoAllow,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data?.message };
  }
};
export const saveSourceCampaign = async (body: any) => {
  try {
    const dataInfo = await allResponse(body, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/reports/source-campaign',
      { data: dataInfo }
    );
    const infoAllow = await allResponseDecrypted(response.data, KEY);
    return {
      response: {
        result: infoAllow,
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
    const dataInfo = await allResponse({...data,commercialPurposes:true}, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/api-composer/composer/allow-list',
      { data: dataInfo },
      headersBack
    );
    const infoAllow = await allResponseDecrypted(response.data, KEY);
    return {
      response: {
        result: response.result,
        data: infoAllow,
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
    const info = await allResponseDecrypted(response.data, KEY);
    return {
      response: {
        result: response.result,
        data: info,
      },
      error: false,
    };
  } catch (e: any) {
    return { error: true, response: e.response?.data };
  }
};
export const sendNumber = async (data: any) => {
  try {
    const dataInfo = await allResponse(data, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/api-composer/composer/answer-phone',
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
    return { error: true, response: e.response?.data, status: e.response.status };
  }
};
export const validateOTOCode = async (data: ValidateOTC) => {
  try {
    const { otc, document_number, document_type, pin, processId, phone } = data;
    let dataToEcrypt;
    if (otc) {
      dataToEcrypt = { document_number, document_type, pin, processId, phone };
    } else {
      dataToEcrypt = { document_number, document_type, pin, processId };
    }
    const dataInfo = await allResponse(dataToEcrypt, KEY);
    const { data: response } = await clientAxiosBackend.post(
      otc ? '/customer/otc/validate' : '/api-composer/composer/validate-otp',
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
    const { otc, document_number, document_type, processId, phone, emailAddr } = data;
    const dataInfo = await allResponse(
      { document_number, document_type, processId, phone, emailAddr },
      KEY
    );
    const { data: response } = await clientAxiosBackend.post(
      otc ? '/customer/otc/generate' : '/api-composer/composer/resend-otp',
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
    // TODO change the clientAxios for backend
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
export const fetchSarlaft = async (body: any) => {
  try {
    const bodyEncrypt = await allResponse({ ...body, processId: getProcessId() }, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/sarlaft/sarlaft-questions',
      { data: bodyEncrypt }
    );
    const data = await allResponseDecrypted(response.data, KEY);
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

export const riskBoxes = async (body: RequestRiskBoxes) => {
  try {
    // TODO
    const bodyEncrypt = await allResponse({ ...body, processId: getProcessId() }, KEY);    
    const response: any = await clientAxiosBackend.post(
      '/api-composer/composer/risk-boxes',
      {
        data: bodyEncrypt,
      }
    );
    const data = await allResponseDecrypted(response.data.data, KEY);
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
export const delKeysRedis = async (body: any) => {
  try {
    const bodyEncrypt = await allResponse(body, KEY);
    const { data: response } = await clientAxiosBackend.post('commons/delete-keys', {
      data: bodyEncrypt,
    });
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
export const getPDF = async (body: iPdfLetter) => {
  try {
    const bodyEncrypt = await allResponse(body, KEY);
    const { data: response } = await clientAxiosBackend.post(
      '/api-composer/composer/documents',
      {
        data: bodyEncrypt,
      }
    );
    const data = await allResponseDecrypted(response.data, KEY);
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
