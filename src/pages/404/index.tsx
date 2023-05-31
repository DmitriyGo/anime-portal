import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Styled404, StyledErrorText } from './indexStyles';

import { Button } from '@/components';
import { ROUTES } from '@/constants/routes';

const Page404 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const homeClickHandle = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Styled404>
      <StyledErrorText>{t('404')}</StyledErrorText>
      <Button onClick={homeClickHandle}>{t('home')}</Button>
    </Styled404>
  );
};

export default Page404;
