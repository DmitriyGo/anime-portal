import { useParams } from 'react-router-dom';

import { WatchContainer } from '@/modules/Watch';

const WatchPage = () => {
  const { id } = useParams<{ id: string }>();

  return <WatchContainer id={+id!} />;
};

export default WatchPage;
