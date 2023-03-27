import { useTranslation } from 'react-i18next';

import { HeaderStyled } from './HeaderStyled';

import { setTheme, Theme } from '@/modules/Theme';
import { useDispatch } from '@/store';

const Header = () => {
  const { i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const dispatch = useDispatch();

  const handleOnDark = () => {
    dispatch(setTheme(Theme.DARK));
  };

  const handleOnLight = () => {
    dispatch(setTheme(Theme.LIGHT));
  };

  return (
    <HeaderStyled>
      <div>
        <button onClick={() => handleClick('uk')}>uk</button>
        <button onClick={() => handleClick('en')}>en</button>
      </div>

      <div>
        <button onClick={handleOnDark}>Dark</button>
        <button onClick={handleOnLight}>Light</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
