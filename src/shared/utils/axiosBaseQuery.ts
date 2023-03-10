import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

interface IBaseQueryFn {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
    },
  ): BaseQueryFn<IBaseQueryFn> =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      if (axios.isAxiosError(axiosError)) {
        const err = axiosError as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        };
      }

      return {
        error: {
          status: 500,
          data: 'Something went wrong',
        },
      };
    }
  };

export default axiosBaseQuery;
