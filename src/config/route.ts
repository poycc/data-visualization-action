export interface RoutesArray {
  path: string;
  exact?: boolean;
  name: string;
  icon?: string;
  component?: string;
  children?: RoutesArray[];
}

const routes: RoutesArray[] = [
  {
    path: '/',
    exact: true,
    name: '首页',
    icon: 'icon-tuichu',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: 'Welcome',
      },
      {
        path: '/welcome1',
        name: 'welcome1',
        icon: 'icon-tuichu',
        component: 'Welcome',
        children: [
          {
            path: '/welcome1/welcome2',
            name: 'welcome',
            component: 'Welcome',
            children: [
              {
                path: '/welcome1/welcome2/welcome3',
                name: 'welcome',
                component: 'Welcome',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
