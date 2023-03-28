import { createPortal } from 'react-dom';

import SideBarBackdrop from '../SideBarBackdrop';
import SideBarLayout from '../SideBarLayout';

interface SideBarProps {
  onOpen: () => void;
  onClose: () => void;
}

const SideBar = ({ onClose }: SideBarProps) => {
  const layout = document.getElementById('layout') as HTMLElement;
  const backdrop = document.getElementById('backdrop') as HTMLElement;

  return (
    <>
      {createPortal(<SideBarLayout onClose={onClose} />, layout)}
      {createPortal(<SideBarBackdrop onClose={onClose} />, backdrop)}
    </>
  );
};

export default SideBar;
