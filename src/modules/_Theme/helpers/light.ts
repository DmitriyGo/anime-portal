import baseTheme from './baseTheme';

import { COLORS } from '@/theme';

const buyerTheme = {
  token: {
    ...baseTheme,
    //TODO fix this bullshit (add motherfucker light theme, you fucking scumbag) ;)
    colorPrimary: COLORS.VIOLET_PRIMARY,
    colorLink: COLORS.VIOLET_PRIMARY,
    colorLinkHover: COLORS.VIOLET_PRIMARY_HOVER,
    colorLinkActive: COLORS.VIOLET_PRIMARY_ACTIVE,
  },
};

export default buyerTheme;
