import * as React from 'react';
import { Col } from 'antd';
import * as d3 from 'd3';

const Index: React.FC = () => {
  const { useEffect, useCallback } = React;

  const draw = useCallback(() => {
    const container = d3.select('#bar-two').append('svg');
    const data: number[] = [50, 43, 120, 87, 99, 167, 142];
    const height: number = 200;
    const width: number = 300;
    const padding = {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20,
    };
    const rectStep = 35;
    const rectWidth = 28;

    container
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('fill', '#1890ff')
      .attr('x', (d, i) => padding.left + i * rectStep)
      .attr('y', (d) => height - padding.bottom - d)
      .attr('width', rectWidth)
      .attr('height', (d) => d);

    container
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('font-size', 14)
      .attr('x', (d, i) => padding.left + i * rectStep)
      .attr('y', (d) => height - padding.bottom - d)
      .attr('dx', rectWidth / 2)
      .attr('dy', 14)
      .text((d) => d);
  }, []);

  useEffect(() => draw(), [draw]);

  return (
    <Col span={6}>
      <div id="bar-two" />
    </Col>
  );
};

export default Index;
