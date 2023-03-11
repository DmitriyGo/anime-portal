import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import ToDoItem from './components/ToDoItem';

import { useGetToDosQuery } from '@/modules/ToDo';

const ToDo = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetToDosQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error</p>;
    console.error(error);
  } else if (data?.length === 0) {
    content = <p>No todos yet</p>;
  } else if (isSuccess) {
    content = data.map((todo) => <ToDoItem key={todo.id} todo={todo} />);
  }

  return (
    <>
      <Head>
        <title>ToDo</title>
      </Head>
      <MainStyled>
        <Link href="/">Home</Link>
        <ul>{content}</ul>
      </MainStyled>
    </>
  );
};

const MainStyled = styled.main`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default ToDo;
