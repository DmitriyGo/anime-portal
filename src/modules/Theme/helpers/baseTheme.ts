import { COLORS } from '@/theme';

export interface BaseThemeInterface {
  whiteColor: string;
  blackColor: string;
  dividerColor: string;
  radiusBase: number;
  borderRadius: number;
}

const baseTheme: BaseThemeInterface = {
  whiteColor: COLORS.WHITE,
  blackColor: COLORS.BLACK,
  dividerColor: COLORS.DIVIDER,
  radiusBase: 8,
  borderRadius: 8,
};

export default baseTheme;
