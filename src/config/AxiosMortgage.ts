import axios from 'axios';

export const clientAxiosBackend = axios.create({
  baseURL: 'https://dev.bancocajasocialsa.org/bcs-mortgage',
});
