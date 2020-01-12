interface RoutesArray {
  path: string;
  exact?: boolean;
  name: string;
  component: string;
  children?: RoutesArray[];
}

const routes: RoutesArray[] = [
  {
    path: '/',
    exact: true,
    name: '首页',
    component: 'Welcome',
  },
];

export default routes;
