interface MousePosition {
    x: number | undefined;
    y: number | undefined;
  }
  

export class Particle {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    canvasContext: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    particleColor: string;
    strokeColor: string;

    constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        canvasContext: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        colors: { particle: string; particleStroke: string }
    ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.particleColor = colors.particle;
        this.strokeColor = colors.particleStroke;
    }

    draw(): void {
        this.canvasContext.beginPath();
        this.canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.canvasContext.fillStyle = this.particleColor;
        this.canvasContext.fill();
    }

    update({
        noBounceH,
        speedH,
    }: {
        noBounceH: boolean;
        noBounceV: boolean;
        speedH: number;
        speedV: number;
        speed: number;
        avoidMouse: boolean;
        mousePosition: MousePosition;
    }): void {
        // Check horizontal bounds
        if (noBounceH && speedH > 0 && this.x > this.canvas.width) this.x = 0;
        else if (noBounceH && speedH < 0 && this.x < 0) this.x = this.canvas.width;
    }
}