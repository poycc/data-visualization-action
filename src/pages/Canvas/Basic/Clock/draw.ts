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

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.FONT_HEIGHT = 15;
    this.MARGIN = 35;
    this.NUMERAL_SPACING = 20;
    this.RADIUS = canvas.width / 2 - this.MARGIN;
    this.HAND_RADIUS = this.RADIUS + this.NUMERAL_SPACING;
    this.HAND_TRUNCATION = canvas.width / 25;
    this.HOUR_HAND_TRUNCATION = canvas.width / 10;
  }

  drawCenter = () => {
    this.context.beginPath();
    this.context.arc(
      this.canvas.width / 2,
      this.canvas.height / 2,
      5,
      0,
      Math.PI * 2,
      true,
    );
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
        this.canvas.width / 2 +
          Math.cos(angle) * this.HAND_RADIUS -
          numeralWidth / 2,
        this.canvas.height / 2 +
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

    this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
    this.context.lineTo(
      this.canvas.width / 2 + Math.cos(angle) * handRadius,
      this.canvas.height / 2 + Math.sin(angle) * handRadius,
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
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.RADIUS,
      0,
      Math.PI * 2,
      true,
    );
    this.context.stroke();
  };

  drawAction = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawCircle();
    this.drawNumerals();
    this.drawCenter();
    this.drawHands();
  };
}

export default Draw;
