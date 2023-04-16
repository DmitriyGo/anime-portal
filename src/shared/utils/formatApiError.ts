import { isHttpClientError } from './httpClient';

import { ResponseStatusCode } from '@/constants/common';
import { IApiError, IApiResponseError } from '@/models/apiError.model';
import { StringMap } from '@/utils';

const formatApiError = (err: unknown): IApiError => {
  const error: IApiError = {
    status: ResponseStatusCode.SOMETHING_WRONG,
    message: (err as Error)?.message || 'Error',
    errors: null,
  };

  if (isHttpClientError(err)) {
    const apiResponse = err.response?.data as IApiResponseError;
    error.status = err.response?.status || ResponseStatusCode.SERVER_ERROR;
    error.message = apiResponse?.message || 'Error';

    if (apiResponse?.errors && Object.keys(apiResponse.errors).length) {
      error.errors = Object.keys(apiResponse.errors).reduce(
        (acc: StringMap<string>, key) => {
          const message = apiResponse.errors?.[key]?.[0];
          acc[key] = message || error.message;
          return acc;
        },
        {},
      );
    }
  }

  return error;
};

export default formatApiError;
