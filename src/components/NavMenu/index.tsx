import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import routes, { RoutesArray } from 'src/config/route';
import 'antd/dist/antd.css';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const NavMenu: React.FC = () => {
  const location = useLocation();

  const getDefaultOpen = () => {
    const path = location.pathname.split('/');
    const arr: string[] = ['/'];
    path.reduce((pre, current) => {
      arr.push([pre, current].join('/'));
      return [pre].concat([current]).join('/');
    });
    return arr;
  };

  const renderTitle = (t: RoutesArray) => (
    <span>
      {t.icon && <IconFont type={t.icon} />}
      <span>{t.name}</span>
    </span>
  );
  const getMenuItems = (data: RoutesArray[] = []): React.ReactNode[] =>
    data.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.path} title={renderTitle(item)}>
            {getMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.path}>
          {item.icon && <IconFont type={item.icon} />}
          {item.component ? (
            <span>
              <Link to={item.path}>{item.name}</Link>
            </span>
          ) : (
            item.name
          )}
        </Menu.Item>
      );
    });
  return (
    <Menu
      theme="light"
      mode="inline"
      className="site-menu"
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={getDefaultOpen()}
    >
      {getMenuItems(routes)}
    </Menu>
  );
};

export default NavMenu;
