import React, { FC } from 'react';

import { StyledCarouselItem } from './SpotlightCarouselItemStyles';

import { Button } from '@/components';

interface SpotlightCarouselItemProps {
  imageUrl: string;
  onNext: () => void;
  onPrev: () => void;
}

const SpotlightCarouselItem: FC<SpotlightCarouselItemProps> = ({
  imageUrl,
  onPrev,
  onNext,
}) => {
  return (
    <StyledCarouselItem imageUrl={imageUrl}>
      <Button onClick={onPrev}>Prev</Button>
      <Button onClick={onNext}>Next</Button>
    </StyledCarouselItem>
  );
};

export default SpotlightCarouselItem;
