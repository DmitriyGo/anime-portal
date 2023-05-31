import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { DetailsContainer } from '@/modules/Details';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const detailId = useMemo(() => {
    let parsedId = -1;

    if (id) {
      parsedId = parseInt(id);
    }

    return parsedId;
  }, [id]);

  return <DetailsContainer id={detailId} />;
};

export default DetailsPage;
