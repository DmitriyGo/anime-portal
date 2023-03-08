import { Rubik } from 'next/font/google';
import { useTheme } from 'styled-components';

const rubik = Rubik({ subsets: ['latin'] });

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <style jsx global>
      {`
        body {
          background: ${theme.backGroundColor};
          color: ${theme.fontColor};
        }
        body * {
          font-family: ${rubik.style.fontFamily}!important;
        }
        body a {
          text-decoration: none;
        }
      `}
    </style>
  );
};

export default GlobalStyles;
