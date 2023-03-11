import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { selectTheme, setDark, setLight } from '@/modules/_Theme';
import { useDispatch, useSelector, wrapper } from '@/store';

const Home = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleOnDark = () => {
    dispatch(setDark());
  };

  const handleOnLight = () => {
    dispatch(setLight());
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <p>{t('greeting_message')}</p>
        <p>{theme}</p>
        <button onClick={handleOnDark}>Dark</button>
        <button onClick={handleOnLight}>Light</button>
        <Link href="/todos">ToDo Page</Link>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async (context) => {
    const { locale = 'uk', res } = context;

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=59',
    );

    const i18nProps = await serverSideTranslations(locale, ['common']);

    return {
      props: {
        ...i18nProps,
      },
    };
  });
