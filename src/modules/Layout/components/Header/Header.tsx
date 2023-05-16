import { Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  StyledHeader,
  StyledBlock,
  StyledListBlock,
  StyledListItem,
} from './HeaderStyles';

import logo from '/logo.png';

import { SearchFormMode } from '../../helpers/types';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchForm from '../SearchForm/SearchForm';

import { Button, StyledIconButton } from '@/components';
import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';
import { ROUTES } from '@/constants/routes';
import { useMediaQuery } from '@/hooks';
import { COLORS, DEVICES } from '@/theme';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const [showExtendedSearch, setExtendedSearch] = useState<boolean>(false);

  const isAuthorized = localStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

  const queryMD = useMediaQuery(DEVICES.MD);
  const queryXS = useMediaQuery(DEVICES.XS);
  const queryXXS = useMediaQuery(DEVICES.XXS);

  const navigate = useNavigate();
  const { t: tAuth } = useTranslation('auth');

  const handleSearchClick = () => {
    setExtendedSearch((show) => !show);
  };

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };

  const handleAccountClick = () => {
    navigate(ROUTES.PROFILE);
  };

  const handleLoginClick = () => {
    navigate(ROUTES.SIGN_IN);
  };

  useEffect(() => {
    if (showExtendedSearch && !queryMD) {
      setExtendedSearch(false);
    }
  }, [queryMD, showExtendedSearch]);

  return (
    <StyledHeader>
      <StyledBlock>
        <StyledBlock>
          <StyledIconButton onClick={onMenuClick}>
            <Menu size={30} />
          </StyledIconButton>
          {!queryXXS && (
            <StyledIconButton onClick={handleLogoClick}>
              <img src={logo} height="30px" alt="logo.png" />
            </StyledIconButton>
          )}

          <SearchForm
            show={showExtendedSearch}
            mode={queryMD ? SearchFormMode.extended : SearchFormMode.small}
          />
        </StyledBlock>

        <StyledListBlock>
          {queryMD && (
            // Icons
            <StyledListItem>
              <StyledIconButton onClick={handleSearchClick}>
                <Search
                  // TODO Icon button wrapper
                  color={showExtendedSearch ? COLORS.EMERALD : ''}
                  size="1.5rem"
                />
              </StyledIconButton>
            </StyledListItem>
          )}

          {!queryXS && (
            <StyledListItem>
              <LanguageSelector top="2rem" left="-2.5rem" />
            </StyledListItem>
          )}

          {isAuthorized && (
            <>
              <StyledListItem>
                <StyledIconButton>
                  <Notifications size="1.5rem" />
                </StyledIconButton>
              </StyledListItem>

              <StyledListItem>
                <StyledIconButton onClick={handleAccountClick}>
                  <AccountCircle size="1.5rem" />
                </StyledIconButton>
              </StyledListItem>
            </>
          )}

          {!isAuthorized && (
            <>
              <Button
                color={COLORS.LIGHT_GREEN}
                fontColor={COLORS.BLACK}
                onClick={handleLoginClick}
              >
                {`${tAuth('login')}`}
              </Button>
            </>
          )}
        </StyledListBlock>
      </StyledBlock>
    </StyledHeader>
  );
};

export default Header;
