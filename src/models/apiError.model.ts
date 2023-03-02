import { ResponseStatusCodes } from '@/constants/common';

export type TApiFieldErrors = Record<string, string[]>;

export interface IApiError {
  status: ResponseStatusCodes;
  message: string;
  errors?: Record<string, string> | null;
}

export interface IApiResponseError {
  message: string;
  errors?: Record<string, Array<string>>;
}
