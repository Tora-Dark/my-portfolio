"use client";
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const ICON = '/assets/wired-lineal-742-code.json'; // Ruta desde la carpeta 'public'

export default function PlayOnce() {    
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;

    // Verifica si el ref está definido y tiene el método goToAndPlay
    if (player && player.goToAndPlay) {
      player.goToAndPlay(0, true); // 0 es el tiempo desde donde empieza, y true asegura que se reproduzca desde el inicio
    }
  }, []);

  return (
    <Player 
      ref={playerRef} 
      src={ICON} // Cambia 'icon' a 'src' si usas una URL
      autoplay={false} // Asegúrate de que no se reproduzca automáticamente
    />
  );
}
