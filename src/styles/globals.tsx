import { Rubik } from 'next/font/google';

import { COLORS } from '@/shared';

const rubik = Rubik({ subsets: ['latin'] });

const GlobalStyles = () => (
  <style jsx global>
    {`
      body {
        background: ${COLORS.GREY_PRIMARY};
        color: ${COLORS.WHITE};
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

export default GlobalStyles;
