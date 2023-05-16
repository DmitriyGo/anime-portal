import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledDetailsContainer } from './DetailsContainerStyles';

import AnimeAPI from '@/api/AnimeAPI';
import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';

interface DetailsContainerProps {
  animeId: string;
}

const DetailsContainer: FC<DetailsContainerProps> = ({ animeId }) => {
  const navigate = useNavigate();

  const [anime, setAnime] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await AnimeAPI.getAnimeById(30);

        setLoading(true);
        setAnime(response.data);
      } catch (error) {
        // navigate(ROUTES.PAGE_NOT_FOUND);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <StyledDetailsContainer>
      <div>
        <pre>{JSON.stringify(anime, null, ' ')}</pre>
      </div>
    </StyledDetailsContainer>
  );
};

export default DetailsContainer;
