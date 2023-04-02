import { useEffect, useState } from 'react';

import { SpotlightCarousel } from '../../components';
import { ImageObject } from '../../helpers';

const SpotlightsContainer = () => {
  const [images, setImages] = useState<ImageObject>({});

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob(
        `../../../../assets/spotlights/*.jpg`,
      );
      const loadedImages: ImageObject = {};

      for (const path in imageModules) {
        const module = await imageModules[path]();
        // @ts-ignore
        loadedImages[path] = module.default;
      }

      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <>
      {Object.keys(images).length > 0 && <SpotlightCarousel images={images} />}
    </>
  );
};

export default SpotlightsContainer;
