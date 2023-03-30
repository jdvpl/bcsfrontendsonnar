import Router from 'next/router';
import { decryptPass } from '..';
import { routes } from '../../routes';
const KEY = process.env.KEYENCRYPTADIGITAL || '';

export const axiosErrorMiddleware = (error: any) => {
  const parseErrorToPath: any = {
    'PF-01': routes.errorValidacion,
    'PF-02': routes.errorValidacion,
    'RL-02': routes.errorCreditBankApplication,
    'IV-03': routes.errorCreditBankApplication,
    'IV-02': routes.errorCreditBankApplication,
    'IV-08': '',
    'IV-05': routes.errorValidacion,
    'VQ-01': routes.startProccess,
    'VQ-02': routes.validacionErrorPreguntas,
    'VQ-03': routes.validacionBiometrica,
    'PF-00': routes.servicError,
    'PF-03': routes.servicError,
    OTP_02: '',
    OTP_03: routes.validacionErrorIntentos,
    OTP_07: '',
    OTP_08: routes.servicError,
    OTP_09: routes.servicError,
  };

  if (error.response) {
    Router.push(
      parseErrorToPath[error.response.data.internal_code] || routes.servicError
    );
  }
  return Promise.reject(error);
};

export const handlerDecrypt = (response: any) => {
  return response;
};
