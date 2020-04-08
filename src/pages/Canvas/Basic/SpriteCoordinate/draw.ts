import spriteSheetImage from './running-sprite-sheet.png';

class Draw {
  canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  location: HTMLDivElement | null;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    locationRef: HTMLDivElement | null,
  ) {
    this.canvas = canvas;
    this.context = context;
    this.location = locationRef;
  }

  drawBackground = () => {
    const VERTICAL_LINE_SPACING = 12;
    let i = this.context.canvas.height;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.strokeStyle = '#F0F0F0';

    while (i > VERTICAL_LINE_SPACING * 4) {
      this.context.beginPath();
      this.context.moveTo(0, i);
      this.context.lineTo(this.context.canvas.width, i);
      this.context.stroke();
      i -= VERTICAL_LINE_SPACING;
    }
  };

  drawSpriteSheet = (image: CanvasImageSource) => {
    this.context.drawImage(image, 0, 0);
  };

  drawVerticalLine = (x: number) => {
    this.context.beginPath();
    this.context.moveTo(x + 0.5, 0);
    this.context.lineTo(x + 0.5, this.context.canvas.height);
    this.context.stroke();
  };

  drawHorizontalLine = (y: number) => {
    this.context.beginPath();
    this.context.moveTo(0, y + 0.5);
    this.context.lineTo(this.context.canvas.width, y + 0.5);
    this.context.stroke();
  };

  drawGuideLine = (x: number, y: number) => {
    this.context.strokeStyle = '#358FFF';
    this.context.lineWidth = 0.5;
    this.drawVerticalLine(x);
    this.drawHorizontalLine(y);
  };

  windowToCanvas = (x: number, y: number) => {
    const bBox = this.canvas.getBoundingClientRect();
    const scale = this.canvas.width / bBox.width;
    return {
      x: x - bBox.left * scale,
      y: y - bBox.top * scale,
    };
  };

  drawAction = () => {
    this.drawBackground();
    const image = new Image();
    image.src = `${spriteSheetImage}`;
    image.onload = () => {
      this.drawSpriteSheet(image);
    };
    this.canvas.onmousemove = (e: MouseEvent) => {
      const { x, y } = this.windowToCanvas(e.clientX, e.clientY);
      this.drawBackground();
      this.drawSpriteSheet(image);
      this.drawGuideLine(x, y);
      if (this.location) {
        this.location.innerText = `当前坐标：（${x}, ${y}）`;
      }
    };
  };
}

export default Draw;
