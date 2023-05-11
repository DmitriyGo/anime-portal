import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL } from '@/constants/common';

const defaultConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const httpClient: AxiosInstance = axios.create(defaultConfig);

export const isHttpClientError = axios.isAxiosError;
export type ApiResponse<Response> = Promise<AxiosResponse<Response>>;

export default httpClient;
