import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { Col } from 'antd';
import { data } from 'src/sourceData/bar';

const Index: React.FC = () => {
  const drawScaleLinear = () => {
    const max: number = d3.max(data, (d) => d.weight) || 0;

    const scale = d3.scaleLinear().range([0, 300]).domain([0, max]);

    const container = d3.select('#scaleLinear');
    container
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .text((d) => `${d.name}:${scale(d.weight)}`)
      .style('background-color', '#1890ff')
      .style('margin-bottom', '5px')
      .style('color', 'white')
      .style('width', (d) => `${d.weight}px`);
  };
  useEffect(() => {
    drawScaleLinear();
  }, []);
  return (
    <Col span={6}>
      <div id="scaleLinear" />
    </Col>
  );
};

export default Index;
