import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useBackdrop } from 'src/shared/hooks/useBackdrop';
import { useTheme } from 'styled-components';

import {
  StyledBlock,
  StyledButton,
  StyledSidebarLayout,
} from './SidebarStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { Backdrop, Button } from '@/components';
import { useMediaQuery } from '@/hooks';
import { DEVICES } from '@/theme';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const theme = useTheme();
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
          <StyledButton color={theme.colorPrimary} onClick={onClose}>
            {t('close_menu')}
          </StyledButton>
        </StyledBlock>

        {queryXS && (
          <StyledBlock>
            <LanguageSelector top="-2rem" left="6.25rem" />
          </StyledBlock>
        )}

        <Button
          color={theme.colorSecondary}
          onClick={() => handleNavigateClick('/')}
        >
          {t('home')}
        </Button>
        <Button
          color={theme.colorSecondary}
          onClick={() => handleNavigateClick('/todos')}
        >
          {t('todos')}
        </Button>
      </StyledSidebarLayout>
    </Backdrop>
  );
};

export default Sidebar;
