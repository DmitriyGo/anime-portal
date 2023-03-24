import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { THEMING_COOKIE_NAME, Theme } from '../../feature/models';
import { selectTheme } from '../../feature/selectors';
import dark from '../../helpers/dark';
import light from '../../helpers/light';

import { useSelector } from '@/store';
import appCookiesStorage from 'src/shared/utils/appCookies';

interface IThemeContextProvider {
  children: ReactNode;
}

function GetTheme(mode: Theme) {
  return mode === Theme.DARK ? dark : light;
}

const ThemeConfigProvider = ({ children }: IThemeContextProvider) => {
  let mode = useSelector(selectTheme);

  const cookie = appCookiesStorage.getItem(THEMING_COOKIE_NAME) as Theme;

  if (cookie) {
    mode = cookie;
  } else {
    appCookiesStorage.setItem(THEMING_COOKIE_NAME, mode);
  }

  const theme = useMemo(() => GetTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfigProvider;
