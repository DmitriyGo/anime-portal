import { useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'store/hooks';

import { StyledSpotlightsContainer } from './SpotlightsContainerStyles';
import { SpotlightCarousel } from '../../components';
import { fetchPreviews } from '../../feature/actionCreators';
import { resetState } from '../../feature/previewSlice';
import {
  selectPreviews,
  selectPreviewsError,
  selectPreviewsIsLoading,
} from '../../feature/selectors';

import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';

const SpotlightsContainer = () => {
  const previews = useSelector(selectPreviews);
  const isLoading = useSelector(selectPreviewsIsLoading);
  const error = useSelector(selectPreviewsError);

  const dispatch = useDispatch();
  const {
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    dispatch(fetchPreviews(language));
  }, [language]);

  useEffect(() => {
    if (error) {
      dispatch(resetState());
    }
  }, [error]);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <StyledSpotlightsContainer>
      {previews.length && <SpotlightCarousel previews={previews} />}
    </StyledSpotlightsContainer>
  );
};

export default SpotlightsContainer;
