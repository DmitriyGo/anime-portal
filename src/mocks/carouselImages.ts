import { StringMap } from '@/utils';

const loadImages = async () => {
  const imageModules = import.meta.glob<StringMap<string>>(
    `../assets/spotlights/*.jpg`,
  );
  const loadedImages: StringMap<string> = {};

  for (const path in imageModules) {
    const module = await imageModules[path]();
    loadedImages[path] = module.default;
  }

  return loadedImages;
};

export default loadImages;
