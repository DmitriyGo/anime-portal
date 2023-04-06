import { FC, Fragment, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import {
  StyledSidebarBlock,
  StyledSidebarCloseButton,
  StyledSidebarLayout,
} from './SidebarLayoutStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

import { Button } from '@/components';
import { DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface SideBarLayoutProps {
  onClose: () => void;
}

const SidebarLayout: FC<SideBarLayoutProps> = ({ onClose }) => {
  const theme = useTheme();
  const queryXS = useMediaQuery(DEVICES.XS);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledSidebarLayout onClick={handleClick}>
      <StyledSidebarBlock>
        <StyledSidebarCloseButton color={theme.colorPrimary} onClick={onClose}>
          Close Menu
        </StyledSidebarCloseButton>
      </StyledSidebarBlock>

      {queryXS && (
        <StyledSidebarBlock>
          <ThemeSelector />
          <LanguageSelector />
        </StyledSidebarBlock>
      )}
    </StyledSidebarLayout>
  );
};

export default SidebarLayout;
