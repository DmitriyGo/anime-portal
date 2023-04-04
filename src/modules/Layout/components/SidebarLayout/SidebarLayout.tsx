import { FC, Fragment, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { StyledSidebarBlock, StyledSidebarLayout } from './SidebarLayoutStyles';
import { LanguageSelector, ThemeSelector } from '../';

import { Button } from '@/components';
import { DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface SideBarLayoutProps {
  onClose: () => void;
}

const SidebarLayout: FC<SideBarLayoutProps> = ({ onClose }) => {
  const theme = useTheme();
  const queryLG = useMediaQuery(DEVICES.LG);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledSidebarLayout onClick={handleClick}>
      <StyledSidebarBlock>
        <Button color={theme.colorPrimary} onClick={onClose}>
          Close Menu
        </Button>
      </StyledSidebarBlock>

      {queryLG && (
        <StyledSidebarBlock>
          <ThemeSelector />
          <LanguageSelector />
        </StyledSidebarBlock>
      )}

      <StyledSidebarBlock>
        {new Array(15).fill(1).map((_, i) => (
          <Fragment key={i}>
            <p>Hello!</p>
            <div>aboba</div>
          </Fragment>
        ))}
      </StyledSidebarBlock>
    </StyledSidebarLayout>
  );
};

export default SidebarLayout;
