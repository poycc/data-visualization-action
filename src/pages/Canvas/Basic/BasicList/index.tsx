import React, { useRef, useEffect } from 'react';
import { setupCanvas } from 'src/utils';

const BasicList: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = setupCanvas(canvasRef.current);

    if (!ctx) return;

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
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(550, 10);
    ctx.lineTo(650, 10);
    ctx.lineTo(550, 100);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(560, 100);
    ctx.lineTo(660, 100);
    ctx.lineTo(660, 10);
    ctx.closePath();
    ctx.fill();
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        ctx.beginPath();
        const x = 700 + j * 50;
        const y = 50 + i * 50;
        const radius = 20;
        const startAngle = 0;
        const endAngle = Math.PI + (Math.PI * j) / 2;
        const anticlockwise = i % 2 !== 0;

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        ctx.closePath();

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
    ctx.beginPath();
    ctx.moveTo(880, 110);
    ctx.fillRect(880, 10, 100, 100);
    ctx.quadraticCurveTo(930, 20, 980, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeRect(1100, 10, 200, 100);
    ctx.moveTo(1110, 50);
    ctx.lineTo(1200, 50);
    ctx.lineTo(1200, 20);
    ctx.lineTo(1250, 60);
    ctx.lineTo(1200, 100);
    ctx.lineTo(1200, 70);
    ctx.lineTo(1110, 70);
    ctx.lineTo(1110, 50);
    ctx.closePath();
    ctx.stroke();
  }, []);

  return <canvas width={1400} height={800} ref={canvasRef} />;
};

export default BasicList;
