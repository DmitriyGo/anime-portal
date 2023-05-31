import { FC } from 'react';

interface ScreenshotsCarousel {
  screenshots: string[];
}

const ScreenshotsCarousel: FC<ScreenshotsCarousel> = ({ screenshots }) => {
  return (
    <>
      {screenshots.map((screenshot, index) => (
        <img key={index} src={screenshot} />
      ))}
    </>
  );
};

export default ScreenshotsCarousel;
