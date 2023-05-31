import { createGlobalStyle } from 'styled-components';

import { COLORS } from '@/theme';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${COLORS.BACKGROUND};
    color: ${COLORS.FONT};
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body * {
    font-family: 'Rubik', sans-serif !important;
  }

  body a {
    all: unset;
  }

  ::-webkit-scrollbar-track {
    all: unset;
    background-color: ${COLORS.BACKGROUND};
  }

  ::-webkit-scrollbar {
    all: unset;
    width: 0.7rem;
    background-color: ${COLORS.BACKGROUND};
  }

  ::-webkit-scrollbar-thumb {
    all: unset;
    background-color: ${COLORS.PRIMARY};
  }
`;

export default GlobalStyles;
