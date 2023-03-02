import baseTheme from './baseTheme';

import { COLORS } from '@/theme';

const providerTheme = {
  token: {
    ...baseTheme,
    colorPrimary: COLORS.VIOLET_PRIMARY,
    colorLink: COLORS.VIOLET_PRIMARY_LIGHT,
    colorLinkHover: COLORS.VIOLET_PRIMARY_HOVER,
    colorLinkActive: COLORS.VIOLET_PRIMARY_ACTIVE,
  },
};

export default providerTheme;
