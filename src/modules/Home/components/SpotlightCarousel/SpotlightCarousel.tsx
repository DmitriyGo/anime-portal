import { ArrowLeft, ArrowRight } from '@styled-icons/material-rounded/';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import {
  StyledSpotlightButton,
  StyledSpotlightControlButtons,
  StyledSpotlightsCarousel,
  StyledSpotlightsSlices,
} from './SpotlightCarouselStyles';
import { StringMap } from '../../helpers';
import SpotlightCarouselItem from '../CarouselItem/SpotlightCarouselItem';

import { useTrottle } from '@/utils';

const autoNextDelay = 7000;

interface SpotlightCarouselProps {
  images: StringMap<string>;
}

const SpotlightCarousel: FC<SpotlightCarouselProps> = ({ images }) => {
  const [withAnimation, setWithAnimation] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const intervalIdRef = useRef<NodeJS.Timeout>();
  const theme = useTheme();

  let imagesLinks = Object.values(images);
  imagesLinks = [
    imagesLinks[imagesLinks.length - 1],
    ...imagesLinks,
    imagesLinks[0],
  ];

  const totalSlides = imagesLinks.length;

  const resetInterval = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, autoNextDelay);
  };

  const handlePrev = useTrottle(() => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
    resetInterval();
  }, 300);

  const handleNext = useTrottle(() => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
    resetInterval();
  }, 300);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, autoNextDelay);
    return () => clearInterval(intervalIdRef.current!);
  }, [autoNextDelay]);

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

  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => {
        setWithAnimation(false);
        setCurrentSlide(1);
        setTimeout(() => setWithAnimation(true), 50);
      }, 250);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setWithAnimation(false);
        setCurrentSlide(totalSlides - 2);
        setTimeout(() => setWithAnimation(true), 50);
      }, 250);
    }
  }, [currentSlide, totalSlides]);

  const carouselItems = imagesLinks.map((imageUrl, index) => (
    <SpotlightCarouselItem key={index} imageUrl={`${imageUrl}`} />
  ));

  return (
    <StyledSpotlightsCarousel>
      <StyledSpotlightsSlices
        showAnimtion={withAnimation}
        current={currentSlide}
        total={totalSlides}
      >
        {carouselItems}
      </StyledSpotlightsSlices>
      <StyledSpotlightControlButtons>
        <StyledSpotlightButton
          color={theme.colorSecondary}
          onClick={handlePrev}
        >
          <ArrowLeft size="3rem" />
        </StyledSpotlightButton>
        <StyledSpotlightButton
          color={theme.colorSecondary}
          onClick={handleNext}
        >
          <ArrowRight size="3rem" />
        </StyledSpotlightButton>
      </StyledSpotlightControlButtons>
    </StyledSpotlightsCarousel>
  );
};

export default SpotlightCarousel;
