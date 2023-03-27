import { useTranslation } from 'react-i18next';

import { ButtonStyled } from '@/components';

const Home = () => {
  const { t: t1 } = useTranslation();
  const { t: t2 } = useTranslation('auth');

  return (
    <main>
      <p>{t1('greeting_message')}</p>
      <p>{t2('login')}</p>
      <ButtonStyled to="/todos">ToDo Page</ButtonStyled>
    </main>
  );
};

export default Home;
