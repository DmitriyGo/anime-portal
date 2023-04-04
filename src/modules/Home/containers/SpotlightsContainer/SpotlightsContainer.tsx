import { useEffect, useState } from 'react';

import { SpotlightCarousel } from '../../components';
import { StringMap } from '../../helpers';

const SpotlightsContainer = () => {
  const [images, setImages] = useState<StringMap<string>>({});

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob(
        `../../../../assets/spotlights/*.jpg`,
      );
      const loadedImages: StringMap<string> = {};

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
