import { ArrowLeft, ArrowRight } from '@styled-icons/material-rounded/';
import React, { FC, useEffect, useRef, useState, MouseEvent } from 'react';

import {
  StyledButton,
  StyledControlButtons,
  StyledSpotlightsCarousel,
  StyledSlices,
} from './SpotlightCarouselStyles';
import CarouselItem from '../CarouselItem/CarouselItem';

import { useMousePosition, useThrottle } from '@/hooks';
import { HomePageApiResponse } from '@/mocks/homePageApi';

const autoNextDelay = 70000;
interface SpotlightCarouselProps {
  homePageData: HomePageApiResponse[];
}

const SpotlightCarousel: FC<SpotlightCarouselProps> = ({ homePageData }) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const intervalIdRef = useRef<NodeJS.Timeout>();
  const ref = useRef<HTMLDivElement>(null);

  const [startX, setClickX] = useState<number>(0);

  homePageData = [
    homePageData[homePageData.length - 1],
    ...homePageData,
    homePageData[0],
  ];

  const totalSlides = homePageData.length;

  const translate = (x: number, anim: string) => {
    ref.current!.style.transitionDuration = anim;

    ref.current!.style.transform = `translateX(-${x}px)`;
  };

  const resetInterval = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, autoNextDelay);
  };

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
        translate(1 * window.innerWidth, '0ms');
      }, 250); //TODO refactor
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setCurrentSlide(totalSlides - 2);
        translate((totalSlides - 2) * window.innerWidth, '0ms');
      }, 250);
    }
  }, [currentSlide, totalSlides]);

  const carouselItems = homePageData.map((data, index) => (
    <CarouselItem key={index} {...data} />
  ));

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setMouseDown(true);
    setClickX(event.clientX);
  };

  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    setMouseDown(false);

    const width = window.innerWidth;
    const move = event.clientX - startX;

    if (Math.abs(move / width) < 0.3) {
      translate(currentSlide * width, '300ms');
    } else {
      setCurrentSlide((prev) => {
        translate((prev - Math.sign(move / width)) * width, '300ms');
        return prev - Math.sign(move / width);
      });
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (mouseDown) {
      const width = window.innerWidth;
      const move = event.clientX - startX;

      translate(currentSlide * width - move, '0ms');
    }
  };

  return (
    <StyledSpotlightsCarousel>
      <StyledSlices
        ref={ref}
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
