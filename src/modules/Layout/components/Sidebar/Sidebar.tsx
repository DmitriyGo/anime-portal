import { FC } from 'react';

import { Backdrop } from '@/components';
import { useBackdrop, useDisableScroll } from '@/hooks';

interface SidebarProps {
  onClose: () => void;
  open: boolean;
}

const Sidebar: FC<SidebarProps> = ({ onClose, open }) => {
  return (
    <Backdrop onClick={onClose} open={open}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
      exercitationem ipsa natus reiciendis. Accusantium adipisci, aliquid,
      blanditiis, delectus dolorum eaque facilis ipsa labore maiores molestiae
      nam placeat quas qui vero!
    </Backdrop>
  );
};

export default Sidebar;
