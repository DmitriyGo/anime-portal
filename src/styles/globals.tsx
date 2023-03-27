import { useTheme } from 'styled-components';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');

        body {
          background: ${theme.backGroundColor};
          color: ${theme.fontColor};

          margin: 0px;
          padding: 0px;
          
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
