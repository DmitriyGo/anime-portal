import { Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  Header as StyledHeader,
  Block,
  ListBlock,
  ListItem,
} from './HeaderStyles';

import logo from '/logo.png';

import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchForm from '../SearchForm/SearchForm';

import { Button, StyledIconButton } from '@/components';
import { ROUTES } from '@/constants/routes';
import { useMediaQuery } from '@/hooks';
import { selectAccessToken } from '@/modules/Auth';
import { useSelector } from '@/store';
import { COLORS, DEVICES } from '@/theme';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const lastScrollTop = useRef(0);

  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showExtendedSearch, setExtendedSearch] = useState<boolean>(false);

  const isAuthorized = useSelector(selectAccessToken);

  const navigate = useNavigate();
  const { t: tAuth } = useTranslation('auth');

  const queryMD = useMediaQuery(DEVICES.MD);
  const queryXS = useMediaQuery(DEVICES.XS);
  const queryXXS = useMediaQuery(DEVICES.XXS);

  const handleSearchClick = () => {
    setExtendedSearch((show) => !show);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > lastScrollTop.current && scrollY > 72) {
        setNavbarVisible(false);
      } else if (scrollY < lastScrollTop.current) {
        setNavbarVisible(true);
      }
      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showExtendedSearch && !queryMD) {
      setExtendedSearch(false);
    }
  }, [queryMD, showExtendedSearch]);

  return (
    <StyledHeader visible={navbarVisible}>
      <Block>
        <Block gap="2.5rem">
          <StyledIconButton onClick={onMenuClick}>
            <Menu size={30} />
          </StyledIconButton>
          {!queryXXS && (
            <StyledIconButton onClick={() => navigate(ROUTES.HOME)}>
              <img src={logo} height="30px" alt="logo.png" />
            </StyledIconButton>
          )}

          <SearchForm show={showExtendedSearch} mode={queryMD} />
        </Block>

        <ListBlock>
          {queryMD && (
            <ListItem>
              <StyledIconButton onClick={handleSearchClick}>
                <Search
                  // TODO Icon button wrapper
                  color={showExtendedSearch ? COLORS.EMERALD : ''}
                  size="1.5rem"
                />
              </StyledIconButton>
            </ListItem>
          )}

          {!queryXS && (
            <ListItem>
              <LanguageSelector top="2rem" left="-2.5rem" />
            </ListItem>
          )}

          {isAuthorized && (
            <>
              <ListItem>
                <StyledIconButton>
                  <Notifications size="1.5rem" />
                </StyledIconButton>
              </ListItem>

              <ListItem>
                <StyledIconButton onClick={() => navigate(ROUTES.PROFILE)}>
                  <AccountCircle size="1.5rem" />
                </StyledIconButton>
              </ListItem>
            </>
          )}

          {!isAuthorized && (
            <>
              <Button
                color={COLORS.LIGHT_GREEN}
                fontColor={COLORS.BLACK}
                onClick={() => navigate(ROUTES.SIGN_IN)}
              >
                {`${tAuth('login')}`}
              </Button>
            </>
          )}
        </ListBlock>
      </Block>
    </StyledHeader>
  );
};

export default Header;
