import { useEffect } from 'react';

const useCursorLeave = (onCursorLeave: () => void) => {
  useEffect(() => {
    const handleCursorLeave = () => {
      onCursorLeave();
    };

    document.addEventListener('mouseleave', handleCursorLeave);

    return () => {
      document.removeEventListener('mouseleave', handleCursorLeave);
    };
  }, [onCursorLeave]);
};

export default useCursorLeave;
