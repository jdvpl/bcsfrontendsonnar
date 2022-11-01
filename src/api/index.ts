import axios from 'axios';
import { clientAxiosKYC } from '../config/AxiosKYC';
import useAES from '../hooks/useAES';

const KEY = process.env.KEY_ENCRYPT_DIGITAL;
const config = {
  headers: {
    'x-mock-match-request-body': true,
    'app-name': 'PDIGITAL',
  },
};

export const ValidateUserTU = async (data: any) => {
  try {
    const { data: response } = await axios.post(
      'http://localhost:3000/api/validateUser',
      data,
      config
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const ValidateOTPCode = async (data: any) => {
  try {
    const { allResponse } = useAES();
    const encryptData = await allResponse(data, KEY);
    const response = await clientAxiosKYC.post('/identity-user/pin', encryptData, config);
    return response;
  } catch (error) {
    return error;
  }
};
