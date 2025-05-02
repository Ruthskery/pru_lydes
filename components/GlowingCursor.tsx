'use client';

import { useEffect, useRef } from 'react';

const GlowingCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 h-1 w-1 rounded-full bg-transparent opacity-80 transition-transform duration-75 ease-out scale-100 shadow-[0_0_200px_220px_rgba(225,185,81,0.2)]"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default GlowingCursor;