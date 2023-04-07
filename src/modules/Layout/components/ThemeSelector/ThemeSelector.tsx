import { Moon, Sun } from '@styled-icons/boxicons-regular';

import { StyledIconButton } from '@/components';
import { selectTheme, setTheme, Theme } from '@/modules/Theme';
import { useDispatch, useSelector } from '@/store';

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleClick = () => {
    dispatch(setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  const icon =
    theme === Theme.DARK ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />;

  return <StyledIconButton onClick={handleClick}>{icon}</StyledIconButton>;
};

export default ThemeSelector;
