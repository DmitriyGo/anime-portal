import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledSpotlightsContainer } from './SpotlightsContainerStyles';
import { SpotlightCarousel } from '../../components';

import { FullPageLoader } from '@/components';
import loadImages from '@/mocks/carouselImages';
import { HomePageApiResponse, getHomePageData } from '@/mocks/homePageApi';

const prepareHomePageData = (images: string[], data: HomePageApiResponse[]) => {
  return data.map((el, index) => ({
    ...el,
    id: index,
    image: images[index],
  }));
};

const SpotlightsContainer = () => {
  const [images, setImages] = useState<string[]>([]);
  const [homePageData, setHomePageData] = useState<HomePageApiResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const images = await loadImages();
      const data = await getHomePageData();

      setImages(images);
      setHomePageData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <StyledSpotlightsContainer>
      {images.length !== 0 ? (
        <SpotlightCarousel
          homePageData={prepareHomePageData(images, homePageData)}
        />
      ) : null}
    </StyledSpotlightsContainer>
  );
};

export default SpotlightsContainer;