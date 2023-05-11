import { useParams } from 'react-router-dom';

import { UserContainer } from '@/modules/User';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();

  return <UserContainer animeId={id!} />;
};

export default UserPage;
