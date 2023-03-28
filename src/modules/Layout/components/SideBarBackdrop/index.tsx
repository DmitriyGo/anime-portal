import { useEffect, useRef } from 'react';

import { StyledSideBarBackdrop } from './styles';

interface SideBarBackProps {
  onClose: () => void;
}

const SideBarBackdrop = ({ onClose }: SideBarBackProps) => {
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

  return <StyledSideBarBackdrop onClick={onClose} />;
};

export default SideBarBackdrop;
