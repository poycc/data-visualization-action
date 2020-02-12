export const setupCanvas: (
  canvas: HTMLCanvasElement,
) => CanvasRenderingContext2D | null = (canvas: HTMLCanvasElement) => {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const { width, height } = rect;
  /* eslint no-param-reassign: ["error", { "props": false }] */
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.scale(dpr, dpr);
  return ctx;
};
