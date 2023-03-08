import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseThemeInterface {
    colorPrimary: string;
    colorSecondary: string;
    colorLink: string;
    colorLinkHover: string;
    colorLinkActive: string;
    backGroundColor: string;
    fontColor: string;
  }
}
