import { Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC, useEffect, useState } from 'react';
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

import { StyledIconButton } from '@/components';
import { useMediaQuery } from '@/hooks';
import { COLORS, DEVICES } from '@/theme';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const [showExtendedSearch, setExtendedSearch] = useState<boolean>(false);

  const navigate = useNavigate();

  const queryMD = useMediaQuery(DEVICES.MD);
  const queryXS = useMediaQuery(DEVICES.XS);
  const queryXXS = useMediaQuery(DEVICES.XXS);

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

          <StyledListItem>
            <StyledIconButton>
              <Notifications size="1.5rem" />
            </StyledIconButton>
          </StyledListItem>

          {!queryXS && (
            <StyledListItem>
              <LanguageSelector top="2rem" left="-2.5rem" />
            </StyledListItem>
          )}

          <StyledListItem>
            <StyledIconButton>
              <AccountCircle size="1.5rem" />
            </StyledIconButton>
          </StyledListItem>
        </StyledListBlock>
      </StyledBlock>
    </StyledHeader>
  );
};

export default Header;
