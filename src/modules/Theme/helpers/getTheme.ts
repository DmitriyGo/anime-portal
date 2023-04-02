import dark from './dark';
import light from './light';
import { Theme } from '../feature/models';

function getTheme(theme: Theme) {
  return theme === Theme.DARK ? dark : light;
}

export default getTheme;
