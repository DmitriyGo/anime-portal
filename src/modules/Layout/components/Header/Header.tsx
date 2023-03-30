import { Globe, Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC, useState } from 'react';

import { StyledHeader, StyledHeaderBlock } from './HeaderStyles';

import logo from '/logo.png';

import { SearchFormMode } from '../../helpers/types';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchForm from '../SearchForm/SearchForm';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

import { StyledIconButton } from '@/components';
import { COLORS, DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const queryLG = useMediaQuery(DEVICES.LG);
  const queryMD = useMediaQuery(DEVICES.MD);

  const [showExtendedSearch, setExtendedSearch] = useState<boolean>(false);

  const handleSearchClick = () => {
    setExtendedSearch((show) => !show);
  };

  return (
    <StyledHeader>
      <StyledHeaderBlock>
        <StyledHeaderBlock>
          <StyledIconButton onClick={onMenuClick}>
            <Menu size={30} />
          </StyledIconButton>
          <img src={logo} height={'30px'} alt="logo.png" />
          <SearchForm
            show={showExtendedSearch}
            mode={queryMD ? SearchFormMode.extended : SearchFormMode.small}
          />
        </StyledHeaderBlock>

        {!queryLG && (
          <StyledHeaderBlock>
            <ThemeSelector />
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
          <StyledIconButton>
            <Notifications size={'1.5rem'} />
          </StyledIconButton>
          <StyledIconButton>
            <Globe size={'1.5rem'} />
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
