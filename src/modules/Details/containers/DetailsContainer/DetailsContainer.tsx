import { FC, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { StyledDetailsContainer } from './DetailsContainerStyles';
import { AnimeDetails } from '../../components';

import AnimeAPI from '@/api/AnimeAPI';
import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';
import { IAnimeDetails } from '@/models/anime.model';

interface DetailsContainerProps {
  id: number;
}

const DetailsContainer: FC<DetailsContainerProps> = ({ id }) => {
  const [anime, setAnime] = useState<IAnimeDetails>();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const {
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await AnimeAPI.getAnimeDetailsById(language, id);
        setAnime(response.data);
      } catch (e) {
        console.error(e);
        navigate(ROUTES.PAGE_NOT_FOUND);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <StyledDetailsContainer>
      {anime && <AnimeDetails animeDetails={anime} id={id} />}
    </StyledDetailsContainer>
  );
};

export default DetailsContainer;
