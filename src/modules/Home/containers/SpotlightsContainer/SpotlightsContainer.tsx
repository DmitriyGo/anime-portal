import { useEffect, useState } from 'react';

import { SpotlightCarousel } from '../../components';
import { StringMap } from '../../helpers';

import loadImages from '@/mocks/carouselImages';

const SpotlightsContainer = () => {
  const [images, setImages] = useState<StringMap<string>>({});

  useEffect(() => {
    (async () => {
      const images = await loadImages();
      setImages(images);
    })();
  }, []);

  return (
    <>
      {Object.keys(images).length > 0 && <SpotlightCarousel images={images} />}
    </>
  );
};

export default SpotlightsContainer;
