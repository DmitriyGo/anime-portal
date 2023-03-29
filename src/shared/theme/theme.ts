export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#121212',
  DARK_GREY: {
    100: '#222222',
    150: '#1e1e1f',
    200: '#202125',
    250: '#242529',
    300: '#2b2c30',
    350: '#292a2e',
    400: '#2A2C31',
    450: '#2c2e34',
    500: '#2F3137',
  },
  GREY: {
    50: '#f9f9f9',
    100: '#f2f2f2',
    200: '#e5e5e5',
    300: '#d9d9d9',
    400: '#bfbfbf',
    500: '#a6a6a6',
    600: '#8c8c8c',
    700: '#737373',
    800: '#595959',
    900: '#404040',
  },
  PURPLE_GREY: {
    50: '#f5f4f7',
    100: '#ebe9ed',
    200: '#ccc9d1',
    300: '#ada8b5',
    400: '#8d8499',
    500: '#6e607d',
    600: '#554c63',
    700: '#3c3849',
    800: '#23202f',
    900: '#0a0715',
  },
  LIGHT_GREEN: '#CAE962',
  EMERALD: '#00FFB7',
  DIVIDER: '#BDBDBD',
  BACKGROUND: {
    LIGHT: '#FBFEF9',
    DARK: '#202125',
  },
  PRIMARY: {
    LIGHT: '#C3B4E4',
    DARK: '#674299',
  },
  SECONDARY: {
    LIGHT: '#EDC7D8',
    DARK: '#A4506C',
  },
  LINK: {
    LIGHT: '#8B5EB9',
    DARK: '#AE8CD3',
  },
  LINK_HOVER: {
    LIGHT: '#61417E',
    DARK: '#9661A6',
  },
  LINK_ACTIVE: {
    LIGHT: '#3D2650',
    DARK: '#774982',
  },
};

export const FONT_SIZES = {
  '10': '0.7rem',
  '12': '0.75rem',
  '14': '0.875rem',
  '16': '1rem',
  '18': '1.125rem',
  '20': '1.25rem',
  '22': '1.375rem',
  '24': '1.5rem',
  '26': '1.6rem',
  '28': '1.75rem',
  '30': '1.875rem',
  '32': '2rem',
  '36': '2.25rem',
  '40': '2.5rem',
  '46': '2.9rem',
  '48': '3rem',
  '56': '3.5rem',
};

const SCREEN_SIZES = {
  XS: '576px',
  SM: '768px',
  MD: '992px',
  LG: '1200px',
  XL: '1440px',
  XXL: '1600px',
};

export const DEVICES = {
  XS: `(max-width: ${SCREEN_SIZES.XS})`,
  SM: `(max-width: ${SCREEN_SIZES.SM})`,
  MD: `(max-width: ${SCREEN_SIZES.MD})`,
  LG: `(max-width: ${SCREEN_SIZES.LG})`,
  XL: `(max-width: ${SCREEN_SIZES.XL})`,
  XXL: `(max-width: ${SCREEN_SIZES.XXL})`,
};
