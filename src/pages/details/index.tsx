import { useParams } from 'react-router-dom';

import { DetailsContainer } from '@/modules/Details';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return <DetailsContainer id={+id!} />;
};

export default DetailsPage;
