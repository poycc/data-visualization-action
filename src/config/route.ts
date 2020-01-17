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
            path: '/canvas/basic/basicList',
            name: 'Basic List',
            component: 'Canvas/Basic/BasicList',
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
            path: '/d3js/basic/numericLinear',
            name: 'NumericLinear',
            component: 'D3js/Basic/NumericLinear',
          },
        ],
      },
    ],
  },
];

export default routes;
