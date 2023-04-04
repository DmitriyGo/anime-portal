import { ResponseStatusCode } from '@/constants/common';
import { StringMap } from '@/modules/Home/helpers';

export type TApiFieldErrors = StringMap<string[]>;

export interface IApiError {
  status: ResponseStatusCode;
  message: string;
  errors?: StringMap<string> | null;
}

export interface IApiResponseError {
  message: string;
  errors?: StringMap<string[]>;
}
