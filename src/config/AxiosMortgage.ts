import axios from 'axios';
import { axiosErrorMiddleware } from '../utils';

export const clientAxiosBackend = axios?.create({
  baseURL: process.env.APIURLMORTGAGE+"/bcs-mortgage",
});

clientAxiosBackend?.interceptors?.response?.use(null, axiosErrorMiddleware(clientAxiosBackend));