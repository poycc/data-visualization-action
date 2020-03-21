import React from 'react';
import { Row } from 'antd';
import ExampleOne from './components/ExampleOne';
import ExampleZTwo from './components/ExampleTwo';

const BarChart: React.FC = () => {
  return (
    <Row>
      <ExampleOne />
      <ExampleZTwo />
    </Row>
  );
};

export default BarChart;
