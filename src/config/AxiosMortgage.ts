import axios from 'axios';
import { axiosErrorMiddleware, handlerDecrypt } from '../utils/axiosMiddleware';

export const clientAxiosBackend = axios?.create({
  baseURL: process.env.APIURLMORTGAGE,
});

clientAxiosBackend?.interceptors?.response.use(handlerDecrypt, axiosErrorMiddleware);
