import axios from 'axios';

export const clientAxiosCommons = axios.create({
  baseURL: process.env.COMMONSAPIURL,
});