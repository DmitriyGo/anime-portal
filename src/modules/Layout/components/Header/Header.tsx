import { Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC } from 'react';

import { StyledHeader, StyledHeaderBlock } from './HeaderStyles';

import logo from '/logo.png';

import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchForm from '../SearchForm/SearchForm';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

import { StyledIconButton } from '@/components';
import { DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const queryLG = useMediaQuery(DEVICES.LG);
  const queryMD = useMediaQuery(DEVICES.MD);

  return (
    <StyledHeader>
      <StyledHeaderBlock>
        <StyledIconButton>
          <Menu onClick={onMenuClick} size={30} />
        </StyledIconButton>
        <img src={logo} height={'30px'} alt="logo.png" />
        {!queryMD && <SearchForm />}
      </StyledHeaderBlock>

      {!queryLG && (
        <StyledHeaderBlock>
          <ThemeSelector />
          <LanguageSelector />
        </StyledHeaderBlock>
      )}

      <StyledHeaderBlock>
        {queryMD && (
          <StyledIconButton>
            <Search size={'1.5rem'} />
          </StyledIconButton>
        )}
        <StyledIconButton>
          <Notifications size={'1.5rem'} />
        </StyledIconButton>
        <StyledIconButton>
          <AccountCircle size={'1.5rem'} />
        </StyledIconButton>
      </StyledHeaderBlock>
    </StyledHeader>
  );
};

export default Header;
