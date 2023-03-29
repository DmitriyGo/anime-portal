import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '@/components';

const Home = () => {
  const { t: t1 } = useTranslation();
  const { t: t2 } = useTranslation('auth');

  return (
    <main>
      <p>{t1('greeting_message')}</p>
      <p>{t2('login')}</p>
      <Button>
        <Link to="/todos">Todo Page</Link>
      </Button>
    </main>
  );
};

export default Home;
