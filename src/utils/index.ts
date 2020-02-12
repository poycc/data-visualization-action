export const setupCanvas = (canvas: HTMLCanvasElement) => {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const { width, height } = rect;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  return ctx;
};
