import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const { Content, Sider } = Layout;

const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = () => setCollapsed(!collapsed);
  return (
    <Layout className='site-layout'>
      <Sider
        breakpoint="lg"
        trigger={!collapsed ? null: ''}
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        theme="light"
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} className="site-menu">
          <Menu.Item key="1">
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div
            className="site-layout-background"
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
