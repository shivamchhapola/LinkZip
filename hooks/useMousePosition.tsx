//This is a React hook which returns mouse position

import { useCallback, useEffect, useState } from 'react';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  }

  useEffect(() => {
    addEventListener('mousemove', mouseMoveHandler);
    return () => {
      removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
