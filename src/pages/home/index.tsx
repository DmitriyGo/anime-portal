import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Theme, selectTheme, setTheme } from '@/modules/Theme';
import { useDispatch, useSelector } from '@/store';

const Home = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleOnDark = () => {
    dispatch(setTheme(Theme.DARK));
  };

  const handleOnLight = () => {
    dispatch(setTheme(Theme.LIGHT));
  };

  return (
    <main>
      <p>{t('greeting_message')}</p>
      <p>{theme}</p>
      <button onClick={handleOnDark}>Dark</button>
      <button onClick={handleOnLight}>Light</button>
      <Link to="/todos">ToDo Page</Link>
    </main>
  );
};

export default Home;
