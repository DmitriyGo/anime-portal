import { useTranslation } from 'react-i18next';

import { Styled404, StyledErrorText } from './indexStyles';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <Styled404>
      <StyledErrorText>{t('404')}</StyledErrorText>
    </Styled404>
  );
};

export default Page404;
