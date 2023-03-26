import { useTheme } from 'styled-components';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <style>
      {`
        body {
          background: ${theme.backGroundColor};
          color: ${theme.fontColor};
        }
        body * {
          font-family: 'Rubik', sans-serif !important;
        }
        body a {
          text-decoration: none;
        }
      `}
    </style>
  );
};

export default GlobalStyles;
