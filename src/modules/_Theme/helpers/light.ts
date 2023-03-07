import baseTheme from './baseTheme';

import { COLORS } from '@/theme';

const lightTheme = {
  token: {
    ...baseTheme,
    //TODO fix this bullshit (add motherfucker light theme, you fucking scumbag) ;)
    // FUCK YOURSELF PIECE OF BULLSHIT!!!<3
    colorPrimary: COLORS.PRIMARY.LIGHT,
    colorSecondary: COLORS.SECONDARY.LIGHT,
    colorLink: COLORS.LINK.LIGHT,
    colorLinkHover: COLORS.LINK_HOVER.LIGHT,
    colorLinkActive: COLORS.LINK_ACTIVE.LIGHT,
  },
};

export default lightTheme;
