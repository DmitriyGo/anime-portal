import { FC, MouseEvent } from 'react';

import { Backdrop } from '@/components';

interface SidebarProps {
  onClose: () => void;
  open: boolean;
}

const Sidebar: FC<SidebarProps> = ({ onClose, open }) => {
  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Backdrop onClick={onClose} open={open}>
      <div onClick={handleContentClick}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
        exercitationem ipsa natus reiciendis. Accusantium adipisci, aliquid,
        blanditiis, delectus dolorum eaque facilis ipsa labore maiores molestiae
        nam placeat quas qui vero!
      </div>
    </Backdrop>
  );
};

export default Sidebar;
