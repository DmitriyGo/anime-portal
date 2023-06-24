import { useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

  const placeholder = Array.from({ length: 30 }, (_, i) => (
    <div style={{ height: '5rem' }} key={i}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
      asperiores atque dolor doloremque doloribus eius est eum id, illum
      inventore laudantium minus quia repellat suscipit totam vitae voluptas
      voluptate.
    </div>
  ));

  return (
    <StyledSpotlightsContainer>
      {previews.length && <SpotlightCarousel previews={previews} />}
      <br />
      {placeholder}
    </StyledSpotlightsContainer>
  );
};

export default SpotlightsContainer;
