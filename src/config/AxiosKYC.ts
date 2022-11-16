import axios from 'axios';

export const clientAxiosKYC = axios.create({
  baseURL: process.env.KYCAPIURL,
});
