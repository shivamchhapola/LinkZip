import { useEffect, useState, RefObject, useRef } from 'react';

export default function useIsInViewport(ref: RefObject<HTMLElement> | RefObject<SVGSVGElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));

    ref.current && observer.current.observe(ref.current);

    return () => {
      observer.current && observer.current.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}