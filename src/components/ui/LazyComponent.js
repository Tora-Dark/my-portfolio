"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const LazyComponent = ({ children, animationClass }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500); // 2 segundos de retraso

      return () => clearTimeout(timer);
    }
  }, [inView, isLoaded]);

  return (
    <div ref={ref} className={`lazy-component ${isLoaded ? `animate__animated ${animationClass}` : ''}`}>
      {isLoaded ? children : null}
    </div>
  );
};

export default LazyComponent;
