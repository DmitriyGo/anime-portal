import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { selectTheme } from '../../feature/selectors';
import getTheme from '../../helpers/getTheme';

import { useSelector } from '@/store';

interface ThemeContextProvider {
  children: ReactNode;
}

const ThemeConfigProvider = ({ children }: ThemeContextProvider) => {
  const mode = useSelector(selectTheme);

  const theme = useMemo(() => getTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfigProvider;
