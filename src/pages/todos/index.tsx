import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { selectTheme } from '@/modules/_Theme/feature/selectors';
import { ToDo, todoApi } from '@/modules/ToDo';
import { ToDoContainer } from '@/modules/ToDo/containers';
import { useSelector, wrapper } from '@/store';

const ToDo = ({ todos }: { todos: ToDo[] }) => {
  const content = todos.map((todo) => (
    <ToDoContainer key={todo.id} todo={todo} />
  ));
  const theme = useSelector(selectTheme);

  return (
    <>
      <Head>
        <title>ToDo</title>
      </Head>
      <StyledMain>
        <Link href="/">Home</Link>
        <p>{theme}</p>
        <ul>{content}</ul>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { locale = 'uk', res } = context;

    const asd = store.dispatch(todoApi.endpoints.getToDos.initiate());
    const data = (await asd).data;

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=59',
    );

    const i18nProps = await serverSideTranslations(locale, ['common']);

    return {
      props: {
        todos: data,
        ...i18nProps,
      },
    };
  });

export default ToDo;
