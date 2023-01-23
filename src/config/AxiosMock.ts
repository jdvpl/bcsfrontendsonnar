import axios from 'axios';

export const clientAxiosMock = axios.create({
  baseURL: 'https://backgeneratepdf-production.up.railway.app/api/users',
});
