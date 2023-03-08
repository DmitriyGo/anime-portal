import { ResponseStatusCode } from '@/constants/common';

export type TApiFieldErrors = Record<string, string[]>;

export interface IApiError {
  status: ResponseStatusCode;
  message: string;
  errors?: Record<string, string> | null;
}

export interface IApiResponseError {
  message: string;
  errors?: Record<string, Array<string>>;
}
