import React, { useEffect, useRef, useState } from 'react';
import { useCanvasHandlers } from './useCanvasHandlers';
import { Particle } from './Particle';

const defaultColors = {
  background: '#dddfe9',
  link: '#476c76',
  text: '#ebe7c5',
  particle: '#476c76',
  particleStroke: '#476c76'
};

interface BackgroundAnimationProps {
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
  colors?: {
    background?: string;
    link?: string;
    text?: string;
    particle?: string;
    particleStroke?: string;
  };
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  opacity = 100,
  numParticles = 10,
  sizeMultiplier = 5,
  speed = 15,
  avoidMouse = false,
  width = 1,
  connections = true,
  connectionDensity = 15,
  noBounceH = false,
  noBounceV = false,
  speedH = 1,
  speedV = 1,
  hover = true,
  colors = defaultColors,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState<{
    x: number | undefined;
    y: number | undefined;
    radius: number;
  }>({
    x: undefined,
    y: undefined,
    radius: 0
  });

  const {
    particle: particleColor,
    particleStroke: strokeColor,
  } = colors;

  const initParticles = (canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D): void => {
    particlesArrayRef.current = [];
    const numberOfParticles = (canvas.width * 0.01) * numParticles;

    for (let i = 0; i < numberOfParticles; i++) {
      const size = (Math.random() * sizeMultiplier) + 1;
      const x = Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2;
      const y = Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2;

      const directionX = noBounceH ? Math.random() * 5 : (Math.random() * 5) - 2.5;
      const directionY = noBounceV ? Math.random() * 5 : (Math.random() * 5) - 2.5;

      particlesArrayRef.current.push(
        new Particle(x, y, directionX, directionY, size, canvasContext, canvas, { particle: particleColor ?? '#000', particleStroke: strokeColor ?? '#000' })
      );
    }
  };

  const connectParticles = (canvasContext: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void => {
    for (let a = 0; a < particlesArrayRef.current.length; a++) {
      for (let b = a; b < particlesArrayRef.current.length; b++) {
        const dx = particlesArrayRef.current[a].x - particlesArrayRef.current[b].x;
        const dy = particlesArrayRef.current[a].y - particlesArrayRef.current[b].y;
        const distance = dx * dx + dy * dy;

        if (distance < (canvas.width / connectionDensity) * (canvas.height / connectionDensity)) {
          let opacityValue = 1 - (distance / 20000);

          if (hover && mousePosition.x !== undefined) {
            const mouseDx = mousePosition.x - particlesArrayRef.current[a].x;
            const mouseDy = (mousePosition.y ?? 0) - particlesArrayRef.current[a].y;
            const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

            if (mouseDistance < 200) {
              opacityValue = Math.min(opacityValue * 2, 1);
            }
          }

          canvasContext.globalAlpha = opacityValue;
          canvasContext.strokeStyle = strokeColor || '#000';
          canvasContext.lineWidth = width;
          canvasContext.beginPath();
          canvasContext.moveTo(particlesArrayRef.current[a].x, particlesArrayRef.current[a].y);
          canvasContext.lineTo(particlesArrayRef.current[b].x, particlesArrayRef.current[b].y);
          canvasContext.stroke();
        }
      }
    }
  };

  const animateParticles = (): void => {
    const canvas = canvasRef.current;
    const canvasContext = canvas?.getContext('2d');

    if (canvas && canvasContext) {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);

      particlesArrayRef.current.forEach(particle => particle.update({
        noBounceH,
        noBounceV,
        speedH,
        speedV,
        speed,
        avoidMouse,
        mousePosition
      }));
      if (connections) {
        connectParticles(canvasContext, canvas);
      }

      animationRef.current = requestAnimationFrame(animateParticles);
    }
  };

  useCanvasHandlers(canvasRef, setMousePosition, initParticles);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.opacity = (opacity / 100).toString();
    }

    animateParticles();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [opacity, animateParticles]);

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
        zIndex: -999,
      }}
    />
  );
};

export default BackgroundAnimation;