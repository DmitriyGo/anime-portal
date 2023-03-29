import { useTranslation } from 'react-i18next';

import { StyledButton } from '@/components';

const Home = () => {
  const { t: t1 } = useTranslation();
  const { t: t2 } = useTranslation('auth');

  return (
    <main>
      <p>{t1('greeting_message')}</p>
      <p>{t2('login')}</p>
      <StyledButton bg="red" bgactive="blue" bghover="green" to="/todos">
        ToDo Page
      </StyledButton>
    </main>
  );
};

export default Home;