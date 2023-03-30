import { Fragment, MouseEvent } from 'react';

import { StyledSidebarLayout } from './SidebarLayoutStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

import { DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface SideBarLayoutProps {
  onClose: () => void;
}

const SidebarLayout = ({}: SideBarLayoutProps) => {
  const queryLG = useMediaQuery(DEVICES.LG);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledSidebarLayout onClick={handleClick}>
      {queryLG && (
        <>
          <ThemeSelector />
          <LanguageSelector />
        </>
      )}
      {new Array(20).fill(1).map((_, i) => (
        <Fragment key={i}>
          <p>Hello!</p>
          <div>aboba</div>
        </Fragment>
      ))}
    </StyledSidebarLayout>
  );
};

export default SidebarLayout;
