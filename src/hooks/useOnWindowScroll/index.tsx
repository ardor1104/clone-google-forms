import { useState, useEffect, useCallback } from 'react';

const useOnWindowScroll = () => {
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
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { windowTop, windowLeft };
};

export default useOnWindowScroll;
