import { useEffect, useRef, useCallback } from 'react';

const useOutsideOnClick = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<any | null>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isInsideElement = ref.current?.contains?.(e.target);

      if (!isInsideElement) {
        onClick();
      }
    },
    [onClick, ref],
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mouseup', handleClickOutside);
    } else {
      document.removeEventListener('mouseup', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isActive]);

  return ref;
};

export default useOutsideOnClick;
