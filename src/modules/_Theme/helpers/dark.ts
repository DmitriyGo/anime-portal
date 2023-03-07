import baseTheme from './baseTheme';

import { COLORS } from '@/theme';

const darkTheme = {
  token: {
    ...baseTheme,
    colorPrimary: COLORS.PRIMARY.DARK,
    colorSecondary: COLORS.SECONDARY.DARK,
    colorLink: COLORS.LINK.DARK,
    colorLinkHover: COLORS.LINK_HOVER.DARK,
    colorLinkActive: COLORS.LINK_ACTIVE.DARK,
  },
};

export default darkTheme;
