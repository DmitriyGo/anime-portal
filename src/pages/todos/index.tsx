import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { selectTodos, ToDoContainer } from '@/modules/ToDo';
import { getTodos } from '@/modules/ToDo';
import { useSelector, wrapper } from '@/store';

const ToDo = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Head>
        <title>ToDo</title>
      </Head>
      <ToDoContainer todos={todos} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { locale = 'uk', res } = context;

    await store.dispatch(getTodos());

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

export default ToDo;
