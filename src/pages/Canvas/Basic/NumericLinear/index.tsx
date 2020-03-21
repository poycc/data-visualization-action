import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { data } from 'src/sourceData/bar';
import { setupCanvas } from 'src/utils';

const NumericLinear: React.FC = () => {
  const scaleLinearRef = useRef<HTMLCanvasElement>(null);
  const drawScaleLinear = () => {
    if (!scaleLinearRef.current) return;
    const ctx = setupCanvas(scaleLinearRef.current);

    if (!ctx) return;

    data.map((item, index) => {
      const height = 22;
      ctx.fillStyle = 'rgb(24, 144, 255)';
      ctx.fillRect(0, index * 30, item.weight, height);

      ctx.fillStyle = 'white';
      ctx.font = '14px Arial';
      ctx.fillText(`${item.name}:${item.weight}`, 5, 15 + 30 * index);

      return null;
    });
  };
  useEffect(() => {
    drawScaleLinear();
  }, []);
  return (
    <Row>
      <Col span={6}>
        <canvas width="375px" height="400px" ref={scaleLinearRef} />
      </Col>
    </Row>
  );
};

export default NumericLinear;
