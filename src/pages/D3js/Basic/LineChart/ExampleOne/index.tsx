import React, { useEffect } from 'react';
import { Col } from 'antd';
import * as d3 from 'd3';

const Index: React.FC = () => {
  const draw = () => {
    const dom = document.getElementById('line-1')?.getBoundingClientRect();
    const dataset = [
      {
        country: 'china',
        gdp: [
          [2000, 11920],
          [2001, 13170],
          [2002, 14550],
          [2003, 16500],
          [2004, 19440],
          [2005, 22870],
          [2006, 27930],
          [2007, 35040],
          [2008, 45470],
          [2009, 51050],
          [2010, 59490],
          [2011, 73140],
          [2012, 83860],
          [2013, 103550],
        ],
      },
      {
        country: 'japan',
        gdp: [
          [2000, 47310],
          [2001, 41590],
          [2002, 39800],
          [2003, 43020],
          [2004, 46550],
          [2005, 45710],
          [2006, 43560],
          [2007, 43560],
          [2008, 48490],
          [2009, 50350],
          [2010, 54950],
          [2011, 59050],
          [2012, 59370],
          [2013, 48980],
        ],
      },
    ];
    const width = dom?.width || 0;
    const height = 500;
    const padding = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    };

    const colors = ['#55ABFC', '#98DDAC'];

    let gdpMax = 0;

    dataset.map((item) => {
      const currentGdpMax = d3.max(item.gdp, (d) => d[1]);
      if (currentGdpMax && currentGdpMax > gdpMax) {
        gdpMax = currentGdpMax;
        return null;
      }
      return null;
    });

    const svg = d3
      .select('#line-1')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const xScale = d3
      .scaleLinear()
      .domain([2000, 2013])
      .range([0, width - padding.left - padding.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, gdpMax * 1.1])
      .range([height - padding.top - padding.bottom, 0]);

    const linePath = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]))
      .curve(d3.curveBasis);

    svg
      .selectAll('path')
      .data(dataset)
      .enter()
      .append('path')
      .attr('d', (d: any) => linePath(d.gdp))
      .attr('fill', 'none')
      .attr('stroke-width', 3)
      .attr('stroke', (d, i) => colors[i])
      .attr('transform', `translate( ${padding.left}, ${padding.top} )`);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(5)
      .tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr(
        'transform',
        `translate( ${padding.left}, ${height - padding.bottom})`,
      )
      .call(xAxis);

    svg
      .append('g')
      .attr('transform', `translate(${padding.left},${padding.top})`)
      .call(yAxis);

    const markStep = 80;

    const gMark = svg
      .selectAll('.gMark')
      .data(dataset)
      .enter()
      .append('g')
      .attr(
        'transform',
        (d, i) =>
          `translate(${padding.left + i * markStep},${height -
            padding.bottom +
            40})`,
      );

    gMark
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', (d, i) => colors[i]);

    gMark
      .append('text')
      .attr('dx', 15)
      .attr('dy', '.5em')
      .attr('fill', 'black')
      .text((d) => d.country);
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <Col span={24}>
      <div id="line-1" style={{ width: '100%' }} />
    </Col>
  );
};

export default Index;
