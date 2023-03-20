import dynamic from 'next/dynamic';

export const ToDoContainer = dynamic(
  () => import('./ToDoContainer/ToDoContainer'),
);
