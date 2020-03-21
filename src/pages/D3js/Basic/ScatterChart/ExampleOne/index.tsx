import * as React from 'react';
import { Col } from 'antd';
import * as d3 from 'd3';

const ExampleOne: React.FC = () => {
  const { useEffect } = React;

  const draw = () => {
    const center = [
      [0.5, 0.5],
      [0.7, 0.8],
      [0.4, 0.9],
      [0.11, 0.32],
      [0.88, 0.25],
      [0.75, 0.12],
      [0.5, 0.1],
      [0.2, 0.3],
      [0.4, 0.1],
      [0.6, 0.7],
    ];

    const width = 500;
    const height = 500;
    const XisWidth = 400;
    const YisWidth = 400;
    const padding = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    };

    const svg = d3
      .select('#scatter-1')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const XAxisScale = d3
      .scaleLinear()
      .domain([0, 1.2 * d3.max(center, (d: any) => d[0])])
      .range([0, XisWidth]);

    const YAxisScale = d3
      .scaleLinear()
      .domain([0, 1.2 * d3.max(center, (d: any) => d[1])])
      .range([0, YisWidth]);

    svg
      .selectAll('circle')
      .data(center)
      .enter()
      .append('circle')
      .attr('fill', 'black')
      .attr('cx', (d) => padding.left + XAxisScale(d[0]))
      .attr('cy', (d) => height - padding.bottom - YAxisScale(d[1]))
      .attr('r', 5);

    const xAxis = d3.axisBottom(XAxisScale).ticks(5);
    YAxisScale.range([YisWidth, 0]);
    const yAxis = d3.axisLeft(YAxisScale).ticks(5);

    svg
      .append('g')
      .attr(
        'transform',
        `translate( ${padding.left}, ${height - padding.bottom} )`,
      )
      .call(xAxis);

    svg
      .append('g')
      .attr(
        'transform',
        `translate(${padding.left},${height - padding.bottom - YisWidth})`,
      )
      .call(yAxis);
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <Col span={12}>
      <div id="scatter-1" />
    </Col>
  );
};
export default ExampleOne;
