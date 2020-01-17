import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { data } from 'src/sourceData/numericLinear';

const NumericLinear: React.FC = () => {
  const scaleLinearRef = useRef<HTMLCanvasElement>(null);
  const drawScaleLinear = () => {
    if (!scaleLinearRef.current) return;
    const canvas = scaleLinearRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    data.map((item, index) => {
      const height = 22;
      ctx.fillStyle = 'rgb(24, 144, 255)';
      ctx.fillRect(0, index * 30, item.weight, height);

      ctx.fillStyle = 'white';
      ctx.font = '14px Segoe-UI';
      ctx.fillText(`${item.name}:${item.weight}`, 5, 15 + 30 * index);
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
