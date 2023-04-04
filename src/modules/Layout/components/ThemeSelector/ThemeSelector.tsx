import { StyledThemeSelector } from './ThemeSelectorStyles';

import { Button } from '@/components';
import { setTheme, Theme } from '@/modules/Theme';
import { useDispatch } from '@/store';

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const handleOnDark = () => {
    dispatch(setTheme(Theme.DARK));
  };

  const handleOnLight = () => {
    dispatch(setTheme(Theme.LIGHT));
  };

  return (
    <StyledThemeSelector>
      <Button onClick={handleOnDark}>Dark</Button>
      <Button onClick={handleOnLight}>Light</Button>
    </StyledThemeSelector>
  );
};

export default ThemeSelector;
