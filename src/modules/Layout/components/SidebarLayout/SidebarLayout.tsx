import { FC, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import {
  StyledBlock,
  StyledButton,
  StyledSidebarLayout,
} from './SidebarLayoutStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { useMediaQuery } from '@/hooks';
import { DEVICES } from '@/theme';

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
      <StyledBlock>
        <StyledButton color={theme.colorPrimary} onClick={onClose}>
          Close Menu
        </StyledButton>
      </StyledBlock>

      {queryXS && (
        <StyledBlock>
          <LanguageSelector />
        </StyledBlock>
      )}
    </StyledSidebarLayout>
  );
};

export default SidebarLayout;
