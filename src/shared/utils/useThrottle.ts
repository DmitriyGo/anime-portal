import { useRef, useCallback } from 'react';

function useThrottleFunction(func: () => void, wait: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledFunc = useCallback(() => {
    if (!timeoutRef.current) {
      func();
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
      }, wait);
      return Promise.resolve();
    } else {
      return null;
    }
  }, [func, wait]);

  return throttledFunc;
}

export default useThrottleFunction;
