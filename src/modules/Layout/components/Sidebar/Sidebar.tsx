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

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <StyledSidebarBackdrop onClick={onClose}>
      <SidebarLayout onClose={onClose} />
    </StyledSidebarBackdrop>
  );
};

export default Sidebar;
