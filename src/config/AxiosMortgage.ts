import axios from 'axios';
import { axiosErrorMiddleware } from '../utils';

export const clientAxiosBackend = axios?.create({
  baseURL: process.env.APIURLMORTGAGE
});

clientAxiosBackend?.interceptors?.response?.use(null, axiosErrorMiddleware(clientAxiosBackend));