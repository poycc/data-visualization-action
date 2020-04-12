class Draw {
  canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  FONT_HEIGHT: number;

  MARGIN: number;

  NUMERAL_SPACING: number;

  RADIUS: number;

  HAND_RADIUS: number;

  HAND_TRUNCATION: number;

  HOUR_HAND_TRUNCATION: number;

  WIDTH: number;

  HEIGHT: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.WIDTH = this.canvas.getBoundingClientRect().width;
    this.HEIGHT = this.canvas.getBoundingClientRect().height;
    this.FONT_HEIGHT = 15;
    this.MARGIN = 35;
    this.NUMERAL_SPACING = 20;
    this.RADIUS = this.HEIGHT / 2 - this.MARGIN;
    this.HAND_RADIUS = this.RADIUS + this.NUMERAL_SPACING;
    this.HAND_TRUNCATION = this.HEIGHT / 25;
    this.HOUR_HAND_TRUNCATION = this.HEIGHT / 10;
  }

  drawCenter = () => {
    this.context.beginPath();
    this.context.arc(this.WIDTH / 2, this.HEIGHT / 2, 5, 0, Math.PI * 2, true);
    this.context.fill();
  };

  drawNumerals = () => {
    let angle = 0;
    let numeralWidth = 0;

    for (let numeral = 1; numeral < 13; numeral += 1) {
      angle = (Math.PI / 6) * (numeral - 3);
      numeralWidth = this.context.measureText(numeral.toString()).width;
      this.context.fillText(
        numeral.toString(),
        this.WIDTH / 2 + Math.cos(angle) * this.HAND_RADIUS - numeralWidth / 2,
        this.HEIGHT / 2 +
          Math.sin(angle) * this.HAND_RADIUS +
          this.FONT_HEIGHT / 3,
      );
    }
  };

  drawHand = (loc: number, isHour: boolean) => {
    const angle = Math.PI * 2 * (loc / 60) - Math.PI / 2;
    const handRadius = isHour
      ? this.RADIUS - this.HAND_TRUNCATION - this.HOUR_HAND_TRUNCATION
      : this.RADIUS - this.HAND_TRUNCATION;

    this.context.moveTo(this.WIDTH / 2, this.HEIGHT / 2);
    this.context.lineTo(
      this.WIDTH / 2 + Math.cos(angle) * handRadius,
      this.HEIGHT / 2 + Math.sin(angle) * handRadius,
    );
    this.context.stroke();
  };

  drawHands = () => {
    const date: Date = new Date();
    let hour: number = date.getHours();
    hour = hour > 12 ? hour - 12 : hour;

    this.drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true);
    this.drawHand(date.getMinutes(), false);
    this.drawHand(date.getSeconds(), false);
  };

  drawCircle = () => {
    this.context.beginPath();
    this.context.arc(
      this.WIDTH / 2,
      this.HEIGHT / 2,
      this.RADIUS,
      0,
      Math.PI * 2,
      true,
    );
    this.context.stroke();
  };

  drawAction = () => {
    this.context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.drawCircle();
    this.drawNumerals();
    this.drawCenter();
    this.drawHands();
  };
}

export default Draw;
