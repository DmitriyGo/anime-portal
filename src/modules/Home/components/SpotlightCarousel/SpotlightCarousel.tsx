import React, { FC, useEffect, useRef, useState } from 'react';

import {
  StyledSpotlightsCarousel,
  StyledSpotlightsContent,
} from './SpotlightCarouselStyles';
import { ImageObject } from '../../helpers';
import SpotlightCarouselItem from '../CarouselItem/SpotlightCarouselItem';

interface SpotlightCarouselProps {
  images: ImageObject;
}

const SpotlightCarousel: FC<SpotlightCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Object.keys(images).length;
  const delay = 7000; // interval delay in milliseconds
  const intervalIdRef = useRef<NodeJS.Timeout>(); // useRef to store the interval ID

  const resetInterval = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, delay);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1,
    );
    resetInterval();
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1,
    );
    resetInterval();
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, delay);
    return () => clearInterval(intervalIdRef.current!);
  }, [delay, totalSlides]);

  const carouselItems = Object.values(images).map((imageUrl, index) => (
    <SpotlightCarouselItem
      key={index}
      imageUrl={`${imageUrl}`}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  ));

  return (
    <StyledSpotlightsCarousel>
      <StyledSpotlightsContent current={currentSlide} total={totalSlides}>
        {carouselItems}
      </StyledSpotlightsContent>
    </StyledSpotlightsCarousel>
  );
};

export default SpotlightCarousel;
