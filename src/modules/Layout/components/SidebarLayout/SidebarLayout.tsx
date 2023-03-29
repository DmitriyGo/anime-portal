import { Fragment, MouseEvent } from 'react';

import { StyledSidebarLayout } from './SidebarLayoutStyles';

interface SideBarLayoutProps {
  onClose: () => void;
}

const SidebarLayout = ({}: SideBarLayoutProps) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledSidebarLayout onClick={handleClick}>
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
