import { useEffect, useState } from 'react';

import { SpotlightCarousel } from '../../components';

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

  useEffect(() => {
    (async () => {
      const images = await loadImages();
      const data = await getHomePageData();

      setImages(images);
      setHomePageData(data);
    })();
  }, []);

  return (
    <>
      {images.length && (
        <SpotlightCarousel
          homePageData={prepareHomePageData(images, homePageData)}
        />
      )}
    </>
  );
};

export default SpotlightsContainer;
