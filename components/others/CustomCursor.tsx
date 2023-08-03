//This is a custom cursor

'use client';
import useMousePosition from '@/hooks/useMousePosition'; //This returns mouse(x, y) position
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  const { x, y } = useMousePosition();
  const [big, setBig] = useState(false); //cursor becomes big when true
  const [visible, setVisible] = useState(true); //cursor becomes hidden when false
  const cursor = useRef<HTMLDivElement>(null);

  //handles events when cursor enters/leaves elements which can make it big
  const mouseEnterHandler = () => {
    setBig(true);
  };
  const mouseLeaveHandler = () => {
    setBig(false);
  };

  //handles events when cursor enters/leaves window
  const mouseWindowLeaveHandler = () => {
    setVisible(false);
  };
  const mouseWindowEnterHandler = () => {
    setVisible(true);
  };

  //adding event listeners
  useEffect(() => {
    //Array of elements which can make cursor big
    const bigElements = Array.from(
      document.getElementsByClassName('cursor-go-big')
    );

    //mouse enter/leave big element event
    bigElements.forEach((e) => {
      e.addEventListener('mouseenter', mouseEnterHandler);
      e.addEventListener('mouseleave', mouseLeaveHandler);
    });

    //mouse enter/leave window event
    document.addEventListener('mouseleave', mouseWindowLeaveHandler);
    document.addEventListener('mouseenter', mouseWindowEnterHandler);

    return () => {
      bigElements.forEach((e) => {
        e.removeEventListener('mouseenter', mouseEnterHandler);
        e.removeEventListener('mouseleave', mouseLeaveHandler);
      });

      window.removeEventListener('mouseleave', mouseWindowLeaveHandler);
      window.removeEventListener('mouseenter', mouseWindowEnterHandler);
    };
  }, []);

  //changing scale of cursor when it enters/leaves big elements
  useEffect(() => {
    if (cursor.current) {
      big
        ? (cursor.current.style.transform = 'scale(2)')
        : (cursor.current.style.transform = 'scale(1)');
    }
  }, [big]);

  return (
    <div
      ref={cursor}
      style={{
        top: y - size / 2,
        left: x - size / 2,
        width: size + 'px',
        height: size + 'px',
        backgroundColor: color,
        visibility: visible ? 'visible' : 'hidden',
      }}
      className={`hidden sm:block pointer-events-none fixed rounded-full z-[99] mix-blend-difference transition-transform`}
    />
  );
}
