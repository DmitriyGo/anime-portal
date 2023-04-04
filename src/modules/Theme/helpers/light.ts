import { DefaultTheme } from 'styled-components';

import baseTheme from './baseTheme';

import { COLORS } from '@/theme';

const lightTheme: DefaultTheme = {
  ...baseTheme,
  colorPrimary: COLORS.PRIMARY.LIGHT,
  colorSecondary: COLORS.SECONDARY.LIGHT,
  colorLink: COLORS.LINK.LIGHT,
  colorLinkHover: COLORS.LINK_HOVER.LIGHT,
  colorLinkActive: COLORS.LINK_ACTIVE.LIGHT,
  backGroundColor: COLORS.BACKGROUND.LIGHT,
  dividerColor: COLORS.BACKGROUND.DARK,
  fontColor: COLORS.BLACK,
};

export default lightTheme;
