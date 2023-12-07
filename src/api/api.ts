import axios, { AxiosRequestConfig } from 'axios';

export function createAxiosInstance(
  baseURL: string,
  config?: AxiosRequestConfig
) {
  return axios.create({
    baseURL,
    ...config,
    timeout: 5000,
  });
}
