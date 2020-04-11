export const setupCanvas: (
  ref: React.RefObject<HTMLCanvasElement>,
  callback: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    dpr: number,
  ) => void,
  contextId?: string,
) => void = (
  ref: React.RefObject<HTMLCanvasElement>,
  callback: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    dpr: number,
  ) => void,
  contextId: string = '2d',
) => {
  if (!ref.current) return;
  const canvas = ref.current;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const { width, height } = rect;
  /* eslint no-param-reassign: ["error", { "props": false }] */
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext(contextId);

  if (ctx && 'scale' in ctx) {
    ctx.scale(dpr, dpr);
    callback(canvas, ctx, dpr);
  }
};

export const windowToCanvas: (
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
) => { x: number; y: number } = (canvas, x, y) => {
  const bBox = canvas.getBoundingClientRect();
  return {
    x: x - bBox.left,
    y: y - bBox.top,
  };
};
