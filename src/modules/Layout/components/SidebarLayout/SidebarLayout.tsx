import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import {
  StyledBlock,
  StyledButton,
  StyledSidebarLayout,
} from './SidebarLayoutStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { Button } from '@/components';
import { useMediaQuery } from '@/hooks';
import { DEVICES } from '@/theme';

interface SideBarLayoutProps {
  onClose: () => void;
}

const SidebarLayout: FC<SideBarLayoutProps> = ({ onClose }) => {
  const theme = useTheme();
  const queryXS = useMediaQuery(DEVICES.XS);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleNavigateClick = (to: string) => {
    navigate(to);
    onClose();
  };

  return (
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
  );
};

export default SidebarLayout;
