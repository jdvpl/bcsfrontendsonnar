import axios from 'axios';

export const clientAxiosBackend = axios.create({
  baseURL: process.env.APIURLMORTGAGE,
});
