import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    whiteColor: string;
    blackColor: string;
    dividerColor: string;
    colorPrimary: string;
    colorSecondary: string;
    colorLink: string;
    colorLinkHover: string;
    colorLinkActive: string;
    backGroundColor: string;
    fontColor: string;
  }
}
