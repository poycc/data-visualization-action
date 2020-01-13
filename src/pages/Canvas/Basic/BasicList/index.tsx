import React, { useRef, useEffect } from 'react';

const BasicList = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect(10, 10, 100, 100);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 100, 100);

      ctx.fillRect(150, 10, 100, 100);
      ctx.clearRect(160, 20, 80, 80);
      ctx.strokeRect(170, 30, 60, 60);

      ctx.beginPath();
      ctx.moveTo(300, 10);
      ctx.lineTo(300, 110);
      ctx.lineTo(335, 50);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(450, 50, 50, 0, Math.PI * 2, true);
      ctx.moveTo(485, 50);
      ctx.arc(450, 50, 35, 0, Math.PI, false);
      ctx.moveTo(435, 40);
      ctx.arc(430, 40, 5, 0, Math.PI * 2, true);
      ctx.moveTo(475, 40);
      ctx.arc(470, 40, 5, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }, []);

  return <canvas width={800} height={800} ref={canvasRef} />;
};

export default BasicList;
