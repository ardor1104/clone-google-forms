import { useState, useEffect, useCallback } from 'react';

const useOnWindowScroll = (
  onScrollEvent?: ({
    windowTop,
    windowLeft,
  }: {
    windowTop: number;
    windowLeft: number;
  }) => void,
) => {
  const [windowTop, setWindowTop] = useState<number>(
    document.body.getBoundingClientRect().left,
  );
  const [windowLeft, setWindowLeft] = useState<number>(
    document.body.getBoundingClientRect().top,
  );

  const onScroll = useCallback(() => {
    const bodyClientRect = document.body.getBoundingClientRect();
    setWindowTop(-bodyClientRect.top);
    setWindowLeft(bodyClientRect.left);

    if (onScrollEvent) {
      onScrollEvent({
        windowTop: -bodyClientRect.top,
        windowLeft: bodyClientRect.left,
      });
    }
  }, [onScrollEvent]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { windowTop, windowLeft };
};

export default useOnWindowScroll;
