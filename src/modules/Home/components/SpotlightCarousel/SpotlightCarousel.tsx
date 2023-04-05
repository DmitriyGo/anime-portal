import { LeftArrow, RightArrow } from '@styled-icons/boxicons-regular';
import React, { FC, useEffect, useRef, useState } from 'react';

import {
  StyledSpotlightButton,
  StyledSpotlightControlButtons,
  StyledSpotlightsCarousel,
  StyledSpotlightsSlices,
} from './SpotlightCarouselStyles';
import { StringMap } from '../../helpers';
import SpotlightCarouselItem from '../CarouselItem/SpotlightCarouselItem';

interface SpotlightCarouselProps {
  images: StringMap<string>;
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

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearInterval(intervalIdRef.current!);
      } else {
        resetInterval();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      clearInterval(intervalIdRef.current!);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const carouselItems = Object.values(images).map((imageUrl, index) => (
    <SpotlightCarouselItem key={index} imageUrl={`${imageUrl}`} />
  ));

  return (
    <StyledSpotlightsCarousel>
      <StyledSpotlightsSlices current={currentSlide} total={totalSlides}>
        {carouselItems}
      </StyledSpotlightsSlices>
      <StyledSpotlightControlButtons>
        <StyledSpotlightButton onClick={handlePrev}>
          <LeftArrow size="1rem" />
        </StyledSpotlightButton>
        <StyledSpotlightButton onClick={handleNext}>
          <RightArrow size="1rem" />
        </StyledSpotlightButton>
      </StyledSpotlightControlButtons>
    </StyledSpotlightsCarousel>
  );
};

export default SpotlightCarousel;
