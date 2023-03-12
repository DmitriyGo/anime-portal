import { DefaultTheme } from 'styled-components';

import baseTheme from './baseTheme';

import { COLORS } from '@/theme';

const darkTheme: DefaultTheme = {
  ...baseTheme,
  colorPrimary: COLORS.PRIMARY.DARK,
  colorSecondary: COLORS.SECONDARY.DARK,
  colorLink: COLORS.LINK.DARK,
  colorLinkHover: COLORS.LINK_HOVER.DARK,
  colorLinkActive: COLORS.LINK_ACTIVE.DARK,
  backGroundColor: COLORS.BLACK,
  fontColor: COLORS.WHITE,
};

export default darkTheme;
