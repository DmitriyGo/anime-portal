import { StringMap } from '@/modules/Home/helpers';

const loadImages = async () => {
  const imageModules = import.meta.glob(`../assets/spotlights/*.jpg`);
  const loadedImages: StringMap<string> = {};

  for (const path in imageModules) {
    const module = await imageModules[path]();
    // @ts-ignore
    loadedImages[path] = module.default;
  }

  return loadedImages;
};

export default loadImages;
