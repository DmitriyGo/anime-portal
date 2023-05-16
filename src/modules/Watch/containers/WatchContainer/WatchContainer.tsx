import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledWatchContainer } from './WatchContainerStyles';

import AnimeAPI from '@/api/AnimeAPI';
import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';
import { IAnime } from '@/models/anime.model';

interface WatchContainerProps {
  animeId: number;
}

const WatchContainer: FC<WatchContainerProps> = ({ animeId }) => {
  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState<IAnime>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await AnimeAPI.getAnimeById(animeId);

        setAnime(response.data);
        setLoading(false);
      } catch (error) {
        navigate(ROUTES.PAGE_NOT_FOUND);
      }
    };

    fetchAnime();
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <StyledWatchContainer>
      <div>
        <pre>{JSON.stringify(anime, null, ' ')}</pre>
      </div>
    </StyledWatchContainer>
  );
};

export default WatchContainer;
