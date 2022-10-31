import axios from 'axios';

export const clientAxiosKYC = axios.create({
  baseURL: process.env.KYC_API_URL,
});
