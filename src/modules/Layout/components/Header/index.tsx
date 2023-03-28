import { Menu, Search, Notification } from '@styled-icons/boxicons-regular';
import { Notifications } from '@styled-icons/material-outlined';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { HeaderStyled } from './styled';
import logo from '../../../../assets/logo.png';
import SideBar from '../SideBar';

import { ButtonStyled } from '@/components';
import { setTheme, Theme } from '@/modules/Theme';

interface HeaderProps {
  onShowSideBarChange: (event: boolean) => void;
}

const Header = ({ onShowSideBarChange }: HeaderProps) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const clickHandle = () => {
    setShowSideBar((prev) => {
      const next = !prev;

      onShowSideBarChange(next);
      return next;
    });
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
      <section>
        <div onClick={clickHandle}>
          <Menu size={30} />
        </div>

        <img src={logo} height={'30px'} alt="logo.png" />
      </section>

      <section>
        <div>
          <ButtonStyled to="#" onClick={() => handleClick('uk')}>
            uk
          </ButtonStyled>
          <ButtonStyled to="#" onClick={() => handleClick('en')}>
            en
          </ButtonStyled>
        </div>

        <div>
          <ButtonStyled to="#" onClick={handleOnDark}>
            Dark
          </ButtonStyled>
          <ButtonStyled to="#" onClick={handleOnLight}>
            Light
          </ButtonStyled>
        </div>
      </section>

      <section>
        <Search size={30} />
        <Notifications size={30} />
      </section>

      {showSideBar && <SideBar onClose={clickHandle} />}
    </HeaderStyled>
  );
};

export default Header;
