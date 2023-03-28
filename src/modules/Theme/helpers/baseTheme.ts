import { COLORS } from '@/theme';

export interface BaseThemeInterface {
  whiteColor: string;
  blackColor: string;
  radiusBase: number;
  borderRadius: number;
}

const baseTheme: BaseThemeInterface = {
  whiteColor: COLORS.WHITE,
  blackColor: COLORS.BLACK,
  radiusBase: 8,
  borderRadius: 8,
};

export default baseTheme;
