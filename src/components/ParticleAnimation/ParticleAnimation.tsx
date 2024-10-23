import React, { useEffect, useRef, useState } from 'react';
import { useParticles } from './useParticles';
import { useCanvasHandlers } from './useCanvasHandlers';

interface Colors {
  background: string;
  link: string;
  text: string;
  particle: string;
  particleStroke: string;
}

interface ParticleAnimationProps {
  opacity?: number;
  numParticles?: number;
  sizeMultiplier?: number;
  speed?: number;
  avoidMouse?: boolean;
  width?: number;
  connections?: boolean;
  connectionDensity?: number;
  noBounceH?: boolean;
  noBounceV?: boolean;
  speedH?: number;
  speedV?: number;
  hover?: boolean;
  colors?: Colors;
  className?: string;
}

const defaultColors: Colors = {
  background: '#dddfe9',
  link: '#476c76',
  text: '#ebe7c5',
  particle: '#476c76',
  particleStroke: '#476c76'
};

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  opacity = 100,
  numParticles = 10,
  sizeMultiplier = 5,
  speed = 15,
  avoidMouse = false,
  noBounceH = false,
  noBounceV = false,
  speedH = 1,
  speedV = 1,
  colors = defaultColors,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number | undefined; y: number | undefined; radius: number }>({ x: undefined, y: undefined, radius: 0 });

  const { initParticles, animateParticles } = useParticles({
    canvasRef,
    numParticles,
    sizeMultiplier,
    colors,
    speed,
    noBounceH,
    noBounceV,
    speedH,
    speedV,
    avoidMouse,
    mousePosition
  });

  useCanvasHandlers(canvasRef, setMousePosition, initParticles);

  useEffect(() => {
    const animate = () => {
      animateParticles();
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-animation ${className}`}
      style={{
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 0,
        opacity: opacity / 100,
      }}
    />
  );
};

export default ParticleAnimation;



