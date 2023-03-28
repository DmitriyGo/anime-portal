import { Menu } from '@styled-icons/boxicons-regular';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { HeaderStyled } from './styled';
import SideBar from '../SideBar';

import { setTheme, Theme } from '@/modules/Theme';

const Header = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const handleOnOpen = () => {
    setShowSideBar(true);
  };
  const handleOnClose = () => {
    setShowSideBar(false);
  };

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
      <div onClick={handleOnOpen}>
        <Menu size={30} />
      </div>

      <div>
        <button onClick={() => handleClick('uk')}>uk</button>
        <button onClick={() => handleClick('en')}>en</button>
      </div>

      <div>
        <button onClick={handleOnDark}>Dark</button>
        <button onClick={handleOnLight}>Light</button>
      </div>

      {showSideBar && <SideBar onClose={handleOnClose} onOpen={handleOnOpen} />}
    </HeaderStyled>
  );
};

export default Header;
