export const THEMING_SLICE_NAME = 'theming';
export const THEMING_COOKIE_NAME = 'theme';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ThemingState {
  theme: Theme;
}

export const initialState: ThemingState = {
  theme: Theme.DARK,
};
