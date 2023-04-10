import { ArrowLeft, ArrowRight } from '@styled-icons/material-rounded/';
import React, { FC, useEffect, useRef, useState, MouseEvent } from 'react';

import {
  StyledButton,
  StyledControlButtons,
  StyledSpotlightsCarousel,
  StyledSlices,
} from './SpotlightCarouselStyles';
import CarouselItem from '../CarouselItem/CarouselItem';

import { useThrottle } from '@/hooks';
import { HomePageApiResponse } from '@/mocks/homePageApi';

const autoNextDelay = 2000;
interface SpotlightCarouselProps {
  homePageData: HomePageApiResponse[];
}

const SpotlightCarousel: FC<SpotlightCarouselProps> = ({ homePageData }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const intervalIdRef = useRef<NodeJS.Timeout>();
  const slicesRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const modifiedHomePageData = [
    homePageData[homePageData.length - 1],
    ...homePageData,
    homePageData[0],
  ];

  const totalSlides = modifiedHomePageData.length;

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
        setCurrentSlide(1);
        translate(window.innerWidth, '0ms');
      }, 250); //TODO refactor
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setCurrentSlide(totalSlides - 2);
        translate((totalSlides - 2) * window.innerWidth, '0ms');
      }, 250);
    }
  }, [currentSlide, totalSlides]);

  //* HELPERS *//

  const translate = (x: number, anim: string) => {
    requestAnimationFrame(() => {
      slicesRef.current!.style.transitionDuration = anim;
      slicesRef.current!.style.transform = `translateX(-${x}px)`;
    });
  };

  const resetInterval = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, autoNextDelay);
  };

  //* CAROUSEL HANDLERS *//

  const handlePrev = useThrottle(() => {
    setCurrentSlide((prevSlide) => {
      translate((prevSlide - 1) * window.innerWidth, '300ms');
      return prevSlide - 1;
    });
    resetInterval();
  }, 300);

  const handleNext = useThrottle(() => {
    setCurrentSlide((prevSlide) => {
      translate((prevSlide + 1) * window.innerWidth, '300ms');
      return prevSlide + 1;
    });
    resetInterval();
  }, 300);

  //* DRAG AND DROP HANDLERS *//

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    //* Check if the event was called with the left mouse button *//
    if (event.button === 0) {
      setMouseDown(true);
      startXRef.current = event.clientX;
      resetInterval();
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (mouseDown) {
      resetInterval();

      const distance = event.clientX - startXRef.current;

      translate(currentSlide * window.innerWidth - distance, '0ms');
    }
  };

  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    setMouseDown(false);
    const distance = startXRef.current - event.clientX;

    if (distance === 0) return;

    const slideTo =
      currentSlide + Math.round(distance / window.innerWidth / 0.4);
    setCurrentSlide(slideTo);
    translate(slideTo * window.innerWidth, '300ms');
    resetInterval();
  };

  const carouselItems = modifiedHomePageData.map((data, index) => (
    <CarouselItem key={index} {...data} />
  ));

  return (
    <StyledSpotlightsCarousel>
      <StyledSlices
        ref={slicesRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {carouselItems}
      </StyledSlices>
      <StyledControlButtons>
        <StyledButton onClick={handlePrev}>
          <ArrowLeft size="3rem" />
        </StyledButton>
        <StyledButton onClick={handleNext}>
          <ArrowRight size="3rem" />
        </StyledButton>
      </StyledControlButtons>
    </StyledSpotlightsCarousel>
  );
};

export default SpotlightCarousel;
