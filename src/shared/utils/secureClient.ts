import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { API_URL } from '@/constants/common';
import { logout, setAccessToken } from '@/modules/Auth';
import { AppStore } from '@/store';

type AccessToken = string | null;

interface TokenRefreshResponse {
  accessToken: string;
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const secureClient: AxiosInstance = axios.create(defaultConfig);

export const setupHttpClient = (store: AppStore) => {
  secureClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      const accessToken: AccessToken | undefined =
        store.getState().auth.accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
  );

  secureClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    async (error: AxiosError): Promise<AxiosResponse> => {
      const { response } = error;

      if (response && response.status === 401) {
        try {
          const refreshResponse: AxiosResponse<TokenRefreshResponse> =
            await secureClient.post<TokenRefreshResponse>(
              `${API_URL}/auth/refresh`, //TODO ne proebatb
            );

          const newAccessToken: string = refreshResponse.data.accessToken;

          store.dispatch(setAccessToken(newAccessToken));

          const originalRequest: InternalAxiosRequestConfig | undefined =
            error.config;

          if (!originalRequest) return axios(defaultConfig);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        } catch (error) {
          store.dispatch(logout());
          throw new Error('User is not authenticated');
        }
      } else {
        throw new Error('An error occurred while processing your request.');
      }
    },
  );
};

export default secureClient;
