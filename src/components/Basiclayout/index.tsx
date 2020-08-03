import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import routes, { RoutesArray } from 'src/config/route';
import NavMenu from '../NavMenu';
import LazyLoad from '../LazyLoad';
import 'antd/dist/antd.css';
import './index.scss';

const { Content, Header } = Layout;

const BasicLayout: React.FC = () => {
  const renderRoutes = (data: RoutesArray[] = []): React.ReactNode[] =>
    data.map((item) => {
      if (item.children) {
        return renderRoutes(item.children);
      }
      return (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          component={LazyLoad(item.component)}
        />
      );
    });
  return (
    <Layout className="site-layout">
      <Header className="site-header">
        <NavMenu />
      </Header>

      <Layout>
        <Content className="site-layout-content">
          <Switch>{renderRoutes(routes)}</Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
