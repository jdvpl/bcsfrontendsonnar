import axios from 'axios';

export const clientAxiosMock = axios.create({
  baseURL: 'http://localhost:7000/api/users',
});
