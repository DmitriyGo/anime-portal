import { FC } from 'react';

import { StyledTrendingCarousel } from './TrendingCarouselStyles';
import TrendingItem from '../TrendingsItem/TrendingsItem';

import { IAnime } from '@/models/anime.model';

interface TrandingCarouselProps {
  animes: IAnime[];
}

const TrendingCarousel: FC<TrandingCarouselProps> = ({ animes }) => {
  return (
    <StyledTrendingCarousel>
      <>
        {animes.map((anime) => (
          <TrendingItem key={anime.id} {...anime} />
        ))}
      </>
    </StyledTrendingCarousel>
  );
};

export default TrendingCarousel;
