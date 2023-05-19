import { t } from 'i18next';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { StyledSpotlightsContainer } from './SpotlightsContainerStyles';
import { SpotlightCarousel } from '../../components';

import AnimeAPI from '@/api/AnimeAPI';
import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';
import { IAnimePreview } from '@/models/anime.model';

const SpotlightsContainer = () => {
  const [previews, setPreviews] = useState<IAnimePreview[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const {
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const responce = await AnimeAPI.getPreviews(language);
        setPreviews(responce.data);
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
    <StyledSpotlightsContainer>
      {previews.length && <SpotlightCarousel prewiews={previews} />}
    </StyledSpotlightsContainer>
  );
};

export default SpotlightsContainer;
