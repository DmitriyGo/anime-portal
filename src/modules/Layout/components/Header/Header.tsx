import { Globe, Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledHeader, StyledHeaderBlock } from './HeaderStyles';

import logo from '/logo.png';

import { LanguageSelector, SearchForm, ThemeSelector } from '..';
import { SearchFormMode } from '../../helpers/types';

import { StyledIconButton } from '@/components';
import { COLORS, DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const [showExtendedSearch, setExtendedSearch] = useState<boolean>(false);

  const navigate = useNavigate();

  const queryLG = useMediaQuery(DEVICES.LG);
  const queryMD = useMediaQuery(DEVICES.MD);
  const querySD = useMediaQuery(DEVICES.XS);

  const handleSearchClick = () => {
    setExtendedSearch((show) => !show);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  useEffect(() => {
    if (showExtendedSearch && !queryMD) {
      setExtendedSearch(false);
    }
  }, [queryMD, showExtendedSearch]);

  return (
    <StyledHeader>
      <StyledHeaderBlock>
        <StyledHeaderBlock>
          <StyledIconButton onClick={onMenuClick}>
            <Menu size={30} />
          </StyledIconButton>
          <StyledIconButton onClick={handleLogoClick}>
            <img src={logo} height={'30px'} alt="logo.png" />
          </StyledIconButton>

          <SearchForm
            show={showExtendedSearch}
            mode={queryMD ? SearchFormMode.extended : SearchFormMode.small}
          />
        </StyledHeaderBlock>

        {!queryLG && (
          <StyledHeaderBlock>
            <LanguageSelector />
          </StyledHeaderBlock>
        )}

        <StyledHeaderBlock>
          {queryMD && (
            <StyledIconButton onClick={handleSearchClick}>
              <Search
                // TODO Icon button wrapper
                color={showExtendedSearch ? COLORS.EMERALD : ''}
                size={'1.5rem'}
              />
            </StyledIconButton>
          )}

          {!querySD && (
            <>
              <ThemeSelector />
              <StyledIconButton>
                <Globe size={'1.5rem'} />
              </StyledIconButton>
            </>
          )}

          <StyledIconButton>
            <Notifications size={'1.5rem'} />
          </StyledIconButton>
          <StyledIconButton>
            <AccountCircle size={'1.5rem'} />
          </StyledIconButton>
        </StyledHeaderBlock>
      </StyledHeaderBlock>
    </StyledHeader>
  );
};

export default Header;
