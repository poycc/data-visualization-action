import React, { useCallback, useEffect, useRef } from 'react';
import { setupCanvas } from 'src/utils';
import Draw from './draw';
import styles from './style.module.scss';

const SpriteCoordinate: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    setupCanvas(canvasRef, (canvas, context) => {
      if (locationRef.current) {
        return new Draw(canvas, context, locationRef.current).drawAction();
      }
      return null;
    });
  }, []);

  useEffect(() => {
    draw();
  }, [draw]);
  return (
    <div className={styles.main}>
      <canvas width={500} height={250} ref={canvasRef} />
      <div ref={locationRef} />
    </div>
  );
};

export default SpriteCoordinate;
