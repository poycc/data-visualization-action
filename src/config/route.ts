export interface RoutesArray {
  path: string;
  exact?: boolean;
  name: string;
  show?: boolean;
  icon?: string;
  component?: string;
  children?: RoutesArray[];
}

const routes: RoutesArray[] = [
  {
    path: '/',
    exact: true,
    name: '首页',
    show: false,
    component: 'Welcome',
  },
  {
    path: '/canvas',
    name: 'Canvas',
    children: [
      {
        path: '/canvas/basic',
        name: 'basic',
        children: [
          {
            path: '/canvas/basic/numericLinear',
            name: 'NumericLinear',
            component: 'Canvas/Basic/NumericLinear',
          },
          {
            path: '/canvas/basic/clock',
            name: 'clock',
            component: 'Canvas/Basic/Clock',
          },
        ],
      },
    ],
  },
  {
    path: '/d3js',
    name: 'd3js',
    children: [
      {
        path: '/d3js/basic',
        name: 'basic',
        children: [
          {
            path: '/d3js/basic/bar',
            name: 'bar chart',
            component: 'D3js/Basic/BarChart',
          },
          {
            path: '/d3js/basic/scatter',
            name: 'scatter chart',
            component: 'D3js/Basic/ScatterChart',
          },
          {
            path: '/d3js/basic/line',
            name: 'line chart',
            component: 'D3js/Basic/LineChart',
          },
        ],
      },
    ],
  },
];

export default routes;
