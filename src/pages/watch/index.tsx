import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { WatchContainer } from '@/modules/Watch';

const WatchPage = () => {
  const { id } = useParams<{ id: string }>();

  const animeId = useMemo(() => {
    let parsedId = -1;

    if (id) {
      parsedId = parseInt(id);
    }

    return parsedId;
  }, [id]);

  return <WatchContainer id={animeId} />;
};

export default WatchPage;
