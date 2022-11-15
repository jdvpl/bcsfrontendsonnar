import axios from "axios";

export const clientAxiosBackend = axios.create({
  baseURL: 'https://61d447fe-6da0-4149-aa7d-14bedb873202.mock.pstmn.io'
})