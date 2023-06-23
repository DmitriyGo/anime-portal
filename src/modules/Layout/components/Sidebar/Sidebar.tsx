import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Block, Button, SidebarLayout } from './SidebarStyles';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { Backdrop } from '@/components';
import { ROUTES } from '@/constants/routes';
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
      <SidebarLayout onClick={handleClick}>
        <Block>
          <Button color={COLORS.PRIMARY} onClick={onClose}>
            {t('close_menu')}
          </Button>
        </Block>

        {queryXS && (
          <Block>
            <LanguageSelector top="-2rem" left="6.25rem" />
          </Block>
        )}

        <Button
          color={COLORS.SECONDARY}
          onClick={() => handleNavigateClick(ROUTES.HOME)}
        >
          {t('home')}
        </Button>
      </SidebarLayout>
    </Backdrop>
  );
};

export default Sidebar;
