import { useEffect } from 'react';

const useDisableScroll = (disabled: boolean) => {
  useEffect(() => {
    if (!disabled) {
      return;
    }
    const disableScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    };

    const enableScroll = () => {
      window.onscroll = null;
    };

    disableScroll();

    return () => {
      enableScroll();
    };
  }, [disabled]);
};

export default useDisableScroll;
