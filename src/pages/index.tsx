// import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import { themingApi } from '@/modules/_Theme';
// import { wrapper } from '@/store';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <p>{t('asdasd')}</p>
    </main>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async (context) => {
//     const { locale = 'uk', res } = context;

//     // store.dispatch(themingApi.endpoints.getTheme.initiate());

//     res.setHeader(
//       'Cache-Control',
//       'public, s-maxage=60, stale-while-revalidate=59',
//     );

//     const i18nProps = await serverSideTranslations(locale, ['common']);

//     // await Promise.all(store.dispatch(themingApi.util.getRunningQueriesThunk()));

//     return {
//       props: {
//         ...i18nProps,
//       },
//     };
//   });
