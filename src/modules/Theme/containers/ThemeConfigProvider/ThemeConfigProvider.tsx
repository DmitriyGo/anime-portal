import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../../feature/models';
import { selectTheme } from '../../feature/selectors';
import dark from '../../helpers/dark';
import light from '../../helpers/light';

import { useSelector } from '@/store';

interface IThemeContextProvider {
  children: ReactNode;
}

const ThemeConfigProvider = ({ children }: IThemeContextProvider) => {
  const mode = useSelector(selectTheme);

  const theme = useMemo(() => (mode === Theme.DARK ? dark : light), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfigProvider;
