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
            path: '/canvas/basic',
            name: 'Basic List',
            component: 'Canvas/Basic/BasicList',
          },
        ],
      },
    ],
  },
];

export default routes;
