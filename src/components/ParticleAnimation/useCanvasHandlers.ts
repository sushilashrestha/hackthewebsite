import { useEffect, useCallback, MutableRefObject, Dispatch, SetStateAction } from 'react';

interface MousePosition {
  x: number | undefined;
  y: number | undefined;
  radius: number;
}

export const useCanvasHandlers = (
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  setMousePosition: Dispatch<SetStateAction<MousePosition>>,
  initParticles: (canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) => void
): void => {
  const handleResize = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasContext = canvas.getContext('2d');
    if (!canvasContext) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setMousePosition(prev => ({
      ...prev,
      radius: (canvas.height / 80) * (canvas.width / 80)
    }));
    initParticles(canvas, canvasContext);
  }, [canvasRef, setMousePosition, initParticles]);

  const handleMouseMove = useCallback((event: MouseEvent): void => {
    setMousePosition(prev => ({
      ...prev,
      x: event.x,
      y: event.y
    }));
  }, [setMousePosition]);

  const handleMouseOut = useCallback((): void => {
    setMousePosition(prev => ({
      ...prev,
      x: undefined,
      y: undefined
    }));
  }, [setMousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleResize, handleMouseMove, handleMouseOut]);
};