import { Notifications } from '@styled-icons/material-outlined';
import { useState, useEffect } from 'react'; // Add useState and useEffect
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import {
  StyledHeader,
  StyledHeaderBlock,
  StyledMenu,
  StyledSearch,
} from './HeaderStyles';

import logo from '/logo.png';

import SearchForm from '../SearchForm/SearchForm';

import { Button } from '@/components';
import { setTheme, Theme } from '@/modules/Theme';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const handleOnDark = () => {
    dispatch(setTheme(Theme.DARK));
  };

  const handleOnLight = () => {
    dispatch(setTheme(Theme.LIGHT));
  };

  return (
    <StyledHeader>
      <StyledHeaderBlock>
        <StyledMenu onClick={onMenuClick} size={30} />
        <img src={logo} height={'30px'} alt="logo.png" />
        <SearchForm />
      </StyledHeaderBlock>
      <StyledHeaderBlock>
        <Button onClick={() => handleClick('uk')}>uk</Button>
        <Button onClick={() => handleClick('en')}>en</Button>
        <Button onClick={handleOnDark}>Dark</Button>
        <Button onClick={handleOnLight}>Light</Button>
      </StyledHeaderBlock>
      <StyledHeaderBlock>
        <StyledSearch size={'1.5rem'} />
        <Notifications size={'1.5rem'} />
      </StyledHeaderBlock>
    </StyledHeader>
  );
};

export default Header;
