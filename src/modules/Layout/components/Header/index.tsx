import { Menu, Search } from '@styled-icons/boxicons-regular';
import { Notifications } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { HeaderStyled } from './styled';
import logo from '../../../../assets/logo.png';
import SearchForm from '../SearchForm';

import { StyledButton } from '@/components';
import { setTheme, Theme } from '@/modules/Theme';

interface HeaderProps {
  onShowSideBar: () => void;
}

const Header = ({ onShowSideBar }: HeaderProps) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleOnDark = () => {
    dispatch(setTheme(Theme.DARK));
  };

  const handleOnLight = () => {
    dispatch(setTheme(Theme.LIGHT));
  };

  return (
    <HeaderStyled>
      <section>
        <div onClick={onShowSideBar}>
          <Menu size={30} />
        </div>

        <img src={logo} height={'30px'} alt="logo.png" />

        <SearchForm />
      </section>

      <section>
        <div>
          <StyledButton to="#" onClick={() => handleClick('uk')}>
            uk
          </StyledButton>
          <StyledButton to="#" onClick={() => handleClick('en')}>
            en
          </StyledButton>
        </div>

        <div>
          <StyledButton to="#" onClick={handleOnDark}>
            Dark
          </StyledButton>
          <StyledButton to="#" onClick={handleOnLight}>
            Light
          </StyledButton>
        </div>
      </section>

      <section>
        <Search size={30} />
        <Notifications size={30} />
      </section>
    </HeaderStyled>
  );
};

export default Header;
