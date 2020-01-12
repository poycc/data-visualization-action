import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import routes, { RoutesArray } from 'src/config/route';
import NavMenu from '../NavMenu';
import LazyLoad from '../LazyLoad';
import 'antd/dist/antd.css';
import './index.scss';

const { Content, Sider } = Layout;

const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = () => setCollapsed(!collapsed);

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
      <Sider
        breakpoint="lg"
        trigger={!collapsed ? null : ''}
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        theme="light"
      >
        <NavMenu />
      </Sider>

      <Layout>
        <Content className="site-layout-content">
          <Router>
            <Switch>{renderRoutes(routes)}</Switch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
