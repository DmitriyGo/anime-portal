import { useTranslation } from 'react-i18next';

import { LinkStyled } from '../../shared/components/Link';

const Home = () => {
  const { t: t1 } = useTranslation();
  const { t: t2 } = useTranslation('auth');

  return (
    <main>
      <p>{t1('greeting_message')}</p>
      <p>{t2('login')}</p>
      <LinkStyled to="/todos">ToDo Page</LinkStyled>
    </main>
  );
};

export default Home;
