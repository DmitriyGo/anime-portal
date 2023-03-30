import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backGroundColor};
    //TODO remove this
    color: ${({ theme }) => theme.fontColor};
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
    text-decoration: none;
  }


  ::-webkit-scrollbar-track {
    all: unset;
    background-color: ${({ theme }) => theme.backGroundColor};
  }

  ::-webkit-scrollbar {
    all: unset;
    width: 10px;
    background-color: ${({ theme }) => theme.backGroundColor};
  }

  ::-webkit-scrollbar-thumb {
    all: unset;
    background-color: ${({ theme }) => theme.colorPrimary};
  }
`;

export default GlobalStyles;
