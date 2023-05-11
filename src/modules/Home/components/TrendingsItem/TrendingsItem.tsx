import { FC } from 'react';

import { StyledTrendingsItem } from './TrendingsItemStyles';

import { IAnime } from '@/models/anime.model';

const TrendingItem: FC<IAnime> = ({ poster, title }) => {
  return (
    <StyledTrendingsItem>
      <p>
        {poster} {title}
      </p>
    </StyledTrendingsItem>
  );
};

export default TrendingItem;
