// useParticles.ts
import { useRef, MutableRefObject } from 'react';
import { Particle } from './Particle';

interface Colors {
  background: string;
  link: string;
  text: string;
  particle: string;
  particleStroke: string;
}

interface MousePosition {
  x: number | undefined;
  y: number | undefined;
}

interface UseParticlesProps {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  numParticles: number;
  sizeMultiplier: number;
  colors: Colors;
  speed: number;
  noBounceH: boolean;
  noBounceV: boolean;
  speedH: number;
  speedV: number;
  avoidMouse: boolean;
  mousePosition: MousePosition;
}

interface UseParticlesReturn {
  initParticles: (canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) => void;
  animateParticles: () => void;
  particlesArrayRef: MutableRefObject<Particle[]>;
}

export const useParticles = ({
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
}: UseParticlesProps): UseParticlesReturn => {
  const particlesArrayRef = useRef<Particle[]>([]);

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
        new Particle(x, y, directionX, directionY, size, canvasContext, canvas, colors)
      );
    }
  };

  const animateParticles = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasContext = canvas.getContext('2d');
    if (!canvasContext) return;
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    particlesArrayRef.current.forEach(particle => particle.update({ noBounceH, noBounceV, speedH, speedV, speed, avoidMouse, mousePosition }));
  };

  return { initParticles, animateParticles, particlesArrayRef };
};