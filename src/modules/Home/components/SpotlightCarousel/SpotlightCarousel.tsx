import { ArrowLeft, ArrowRight } from '@styled-icons/material-rounded/';
import React, {
  FC,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  TouchEvent,
  useLayoutEffect,
} from 'react';

import {
  StyledButton,
  StyledControlButtons,
  StyledSpotlightsCarousel,
  StyledSlices,
} from './SpotlightCarouselStyles';
import SpotlightlItem from '../SpotlightlItem/SpotlightlItem';

import { useCursorLeave, useThrottle } from '@/hooks';
import { IAnimePrewiew } from '@/models/anime.model';

const AUTO_NEXT_DELAY = 70000;
const NEXT_SLIDE_DELAY = 300;
const MOVE_SLIDE_COEFFICIENT = 0.2;

interface SpotlightCarouselProps {
  prewiews: IAnimePrewiew[];
}

const SpotlightCarousel: FC<SpotlightCarouselProps> = ({ prewiews }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const intervalIdRef = useRef<NodeJS.Timeout>();
  const slicesRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const modifiedPrewiews = [
    prewiews[prewiews.length - 1],
    ...prewiews,
    prewiews[0],
  ];

  const totalSlides = modifiedPrewiews.length;

  useLayoutEffect(() => {
    translate(window.innerWidth, 0);
  }, []);

  useCursorLeave(() => {
    setMouseDown(false);
    translate(currentSlide * window.innerWidth, NEXT_SLIDE_DELAY);
  });

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, AUTO_NEXT_DELAY);
    return () => clearInterval(intervalIdRef.current!);
  }, [AUTO_NEXT_DELAY]);

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
        translate(window.innerWidth, 0);
      }, NEXT_SLIDE_DELAY);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setCurrentSlide(totalSlides - 2);
        translate((totalSlides - 2) * window.innerWidth, 0);
      }, NEXT_SLIDE_DELAY);
    }
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const handleResize = () => {
      translate(currentSlide * window.innerWidth, 0);
      resetInterval();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  //* HELPERS *//

  const translate = (x: number, anim: number) => {
    requestAnimationFrame(() => {
      if (slicesRef.current) {
        slicesRef.current.style.transitionDuration = `${anim}ms`;
        slicesRef.current.style.transform = `translateX(-${x}px)`;
      }
    });
  };

  const resetInterval = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = setInterval(() => {
      handleNext();
    }, AUTO_NEXT_DELAY);
  };

  //* CAROUSEL HANDLERS *//

  const handlePrev = useThrottle(() => {
    setCurrentSlide((prevSlide) => {
      translate((prevSlide - 1) * window.innerWidth, NEXT_SLIDE_DELAY);
      return prevSlide - 1;
    });
    resetInterval();
  }, NEXT_SLIDE_DELAY);

  const handleNext = useThrottle(() => {
    setCurrentSlide((prevSlide) => {
      translate((prevSlide + 1) * window.innerWidth, NEXT_SLIDE_DELAY);
      return prevSlide + 1;
    });
    resetInterval();
  }, NEXT_SLIDE_DELAY);

  //* DRAG AND DROP HANDLERS *//

  const handleDragStart = (
    event: MouseEvent<HTMLDivElement> & TouchEvent<HTMLDivElement>,
  ) => {
    if (event['button'] === 0 || event.type === 'touchstart') {
      setMouseDown(true);
      startXRef.current =
        event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;

      resetInterval();
    }
  };

  const handleDrag = (
    event: MouseEvent<HTMLDivElement> & TouchEvent<HTMLDivElement>,
  ) => {
    if (mouseDown) {
      const distance =
        event.type === 'mousemove'
          ? event.clientX - startXRef.current
          : event.touches[0].clientX - startXRef.current;

      translate(currentSlide * window.innerWidth - distance, 0);
      resetInterval();
    }
  };

  const handleDrop = (
    event: MouseEvent<HTMLDivElement> & TouchEvent<HTMLDivElement>,
  ) => {
    const distance =
      event.type === 'mouseup'
        ? event.clientX - startXRef.current
        : event.changedTouches[0].clientX - startXRef.current;

    const width = window.innerWidth;

    if (Math.abs(distance / width) < MOVE_SLIDE_COEFFICIENT) {
      translate(currentSlide * width, NEXT_SLIDE_DELAY);
    } else {
      setCurrentSlide((prev) => {
        translate(
          (prev - Math.sign(distance / width)) * width,
          NEXT_SLIDE_DELAY,
        );
        return prev - Math.sign(distance / width);
      });
    }

    setMouseDown(false);
    resetInterval();
  };

  const carouselItems = modifiedPrewiews.map((data, index) => {
    let position = index;

    if (index == modifiedPrewiews.length - 1) {
      position = 1;
    } else if (index == 0) {
      position = modifiedPrewiews.length - 2;
    }

    return <SpotlightlItem key={index} position={position} {...data} />;
  });

  return (
    <StyledSpotlightsCarousel>
      <StyledSlices
        ref={slicesRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDrop}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDrop}
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
