import React, { FC, ReactNode, useState, useRef, useEffect } from 'react';

import { StyledDropdown, StyledDropdownContent } from './DropdownStyles';
import { StyledIconButton } from '../IconButton/IconButton';

interface DropdownProps {
  icon?: ReactNode;
  children?: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ children, icon }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }, []);

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
