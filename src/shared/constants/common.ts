export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || '';
export const FRONT_END_URL = process.env.NEXT_PUBLIC_FRONT_END_URL || '';

export const API_URL = `${BASE_API_URL}/api`;

export const AUTHORIZATION_TOKEN_STORAGE_KEY = 'auth_token';
export const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

export const AUTHORIZATION_TOKEN_EXPIRES = 24;
export const SAVED_ROUTE_LOCATION_DATA_STORAGE_KEY =
  'saved_route_location_data';

export enum ResponseStatusCodes {
  SUCCESS = 200,
  ACCEPTED = 202,
  TEMPORARY_REDIRECT = 307,
  BAD_REQUEST = 400,
  NOT_AUTHORIZED = 401,
  SESSION_ENDED = 403,
  NOT_FOUND = 404,
  SOMETHING_WRONG = 418,
  SERVER_ERROR = 500,
}

export const SEO_TITLE_SITE = '';
