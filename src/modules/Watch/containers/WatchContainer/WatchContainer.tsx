import { FC, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { StyledWatchContainer } from './WatchContainerStyles';

import AnimeAPI from '@/api/AnimeAPI';
import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';

interface WatchContainerProps {
  id: number;
}

const WatchContainer: FC<WatchContainerProps> = ({ id }) => {
  const [anime, setAnime] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const {
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const responce = await AnimeAPI.getDescriptionById(language, id);
        setAnime(responce.data);
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
    <StyledWatchContainer>
      <div>
        <pre>{JSON.stringify(anime, null, '\t')}</pre>
      </div>
    </StyledWatchContainer>
  );
};

export default WatchContainer;
