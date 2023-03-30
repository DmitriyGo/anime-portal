import { useEffect } from 'react';

import { StyledSidebarBackdrop } from './SidebarStyles';
import SidebarLayout from '../SidebarLayout/SidebarLayout';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <StyledSidebarBackdrop onClick={onClose}>
      <SidebarLayout onClose={onClose} />
    </StyledSidebarBackdrop>
  );
};

export default Sidebar;
