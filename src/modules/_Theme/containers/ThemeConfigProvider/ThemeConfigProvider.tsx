import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../../helpers/dark';
import dark from '../../helpers/light';

import { useSelector } from '@/store';

interface IThemeContextProvider {
  children: ReactNode;
}

const ThemeConfigProvider = ({ children }: IThemeContextProvider) => {
  // TODO
  // const mode = useSelector((state) => state.theming);

  const mode = 'dark';

  const theme = useMemo(() => (mode === 'dark' ? dark : light), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfigProvider;
