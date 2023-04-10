import { useState, useEffect } from 'react';

export interface Position {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [pos, setPos] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return pos;
};

export default useMousePosition;
