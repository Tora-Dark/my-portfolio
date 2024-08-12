import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (animationClass) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef(null); // Declaración única de ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current; // Guardamos el valor actual de ref.current

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]); // Asegúrate de pasar ref como dependencia si es necesario

  return [ref, isAnimated ? animationClass : ''];
};

export default useScrollAnimation;
