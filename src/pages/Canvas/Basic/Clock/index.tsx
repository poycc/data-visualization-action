import React, { useRef, useEffect, useCallback, useState } from 'react';
import { setupCanvas } from 'src/utils';
import Draw from './draw';
import styles from './style.module.scss';

const Clock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [countDown, setCountDown] = useState<number>(0);

  const countDownRef = useRef(countDown);
  countDownRef.current = countDown;

  const draw = useCallback(() => {
    setupCanvas(canvasRef, (canvas, context) => {
      const drawClass = new Draw(canvas, context);
      const timer: number = window.setInterval(
        () => drawClass.drawAction(),
        1000,
      );
      setCountDown(timer);
    });
  }, []);

  useEffect(() => {
    draw();
    return () => clearInterval(countDownRef.current);
  }, [draw]);

  return (
    <div className={styles.main}>
      <canvas width={400} height={400} ref={canvasRef} />
    </div>
  );
};

export default Clock;
