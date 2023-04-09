import { ArrowLeft, ArrowRight } from '@styled-icons/material-rounded/';
import React, { FC, useEffect, useRef, useState } from 'react';

import {
  StyledSpotlightButton,
  StyledSpotlightControlButtons,
  StyledSpotlightsCarousel,
  StyledSpotlightsSlices,
} from './SpotlightCarouselStyles';
import CarouselItem from '../CarouselItem/CarouselItem';

import { useThrottle } from '@/hooks';
import { HomePageApiResponse } from '@/mocks/homePageApi';

const autoNextDelay = 70000;

interface SpotlightCarouselProps {
  homePageData: HomePageApiResponse[];
}

const SpotlightCarousel: FC<SpotlightCarouselProps> = ({ homePageData }) => {
  const [withAnimation, setWithAnimation] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const intervalIdRef = useRef<NodeJS.Timeout>();

  homePageData = [
    homePageData[homePageData.length - 1],
    ...homePageData,
    homePageData[0],
  ];

  const totalSlides = homePageData.length;

  const resetInterval = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, autoNextDelay);
  };

  const handlePrev = useThrottle(() => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
    resetInterval();
  }, 300);

  const handleNext = useThrottle(() => {
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
      }, 250); //TODO refactor
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setWithAnimation(false);
        setCurrentSlide(totalSlides - 2);
        setTimeout(() => setWithAnimation(true), 50);
      }, 250);
    }
  }, [currentSlide, totalSlides]);

  const carouselItems = homePageData.map((data, index) => (
    <CarouselItem key={index} {...data} />
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
        <StyledSpotlightButton onClick={handlePrev}>
          <ArrowLeft size="3rem" />
        </StyledSpotlightButton>
        <StyledSpotlightButton onClick={handleNext}>
          <ArrowRight size="3rem" />
        </StyledSpotlightButton>
      </StyledSpotlightControlButtons>
    </StyledSpotlightsCarousel>
  );
};

export default SpotlightCarousel;
