import { useEffect, useState, useMemo, RefObject } from 'react';

export default function useIsInViewport(ref: RefObject<HTMLElement> | RefObject<SVGSVGElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}