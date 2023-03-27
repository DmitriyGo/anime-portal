import { COLORS } from '@/theme';

export interface BaseThemeInterface {
  whiteColor: string;
  blackColor: string;
  radiusBase: number;
  borderRadius: number;
  gray: {
    veryLight: string;
    light: string;
    dart: string;
    very_dark: string;
  };
}

const baseTheme: BaseThemeInterface = {
  whiteColor: COLORS.WHITE,
  blackColor: COLORS.BLACK,
  gray: {
    veryLight: COLORS.GRAY.VERY_LIGHT,
    light: COLORS.GRAY.LIGHT,
    dart: COLORS.GRAY.DARK,
    very_dark: COLORS.GRAY.VERY_DARK,
  },
  radiusBase: 8,
  borderRadius: 8,
};

export default baseTheme;
