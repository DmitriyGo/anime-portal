import React, { FC, ReactNode, useState, useRef } from 'react';

import { StyledDropdown, StyledDropdownContent } from './DropdownStyles';
import { StyledIconButton } from '../IconButton/IconButton';

import { useOutsideDetect } from '@/hooks';

interface DropdownProps {
  icon?: ReactNode;
  children?: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ children, icon }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideDetect(dropdownRef, open, () => setOpen(false));

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setOpen((open) => !open);
  };

  return (
    <StyledDropdown ref={dropdownRef}>
      <StyledIconButton onClick={handleButtonClick}>{icon}</StyledIconButton>
      {open && (
        <StyledDropdownContent onClick={() => setOpen(false)}>
          {children}
        </StyledDropdownContent>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
