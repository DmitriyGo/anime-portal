import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  StyledBlock,
  StyledButton,
  StyledSidebarLayout,
} from './SidebarStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { Backdrop, Button } from '@/components';
import { useBackdrop, useMediaQuery } from '@/hooks';
import { COLORS, DEVICES } from '@/theme';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const queryXS = useMediaQuery(DEVICES.XS);

  useBackdrop(onClose);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleNavigateClick = (to: string) => {
    navigate(to);
    onClose();
  };

  return (
    <Backdrop onClick={onClose}>
      <StyledSidebarLayout onClick={handleClick}>
        <StyledBlock>
          <StyledButton color={COLORS.PRIMARY} onClick={onClose}>
            {t('close_menu')}
          </StyledButton>
        </StyledBlock>

        {queryXS && (
          <StyledBlock>
            <LanguageSelector top="-2rem" left="6.25rem" />
          </StyledBlock>
        )}

        <Button
          color={COLORS.SECONDARY}
          onClick={() => handleNavigateClick('/')}
        >
          {t('home')}
        </Button>
      </StyledSidebarLayout>
    </Backdrop>
  );
};

export default Sidebar;
