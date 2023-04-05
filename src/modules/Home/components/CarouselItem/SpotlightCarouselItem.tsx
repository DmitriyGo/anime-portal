import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledCarouselItem } from './SpotlightCarouselItemStyles';

import { Button } from '@/components';

interface SpotlightCarouselItemProps {
  imageUrl: string;
}

const SpotlightCarouselItem: FC<SpotlightCarouselItemProps> = ({
  imageUrl,
}) => {
  return <StyledCarouselItem imageUrl={imageUrl} />;
};

export default SpotlightCarouselItem;
