// hooks/useWindowDimensions.js
import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
      breakpoint: '',
    };
  }

  const { innerWidth: width, innerHeight: height } = window;
  let breakpoint = '';

  if (width < 640) {
    breakpoint = 'sm';
  } else if (width < 768) {
    breakpoint = 'md';
  } else if (width < 1024) {
    breakpoint = 'lg';
  } else if (width < 1280) {
    breakpoint = 'xl';
  } else {
    breakpoint = '2xl';
  }

  return {
    width,
    height,
    breakpoint,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
