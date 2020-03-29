import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import routes, { RoutesArray } from 'src/config/route';
import 'antd/dist/antd.css';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const NavMenu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const getDefaultOpen = () => {
    const path = location.pathname.split('/');
    const arr: string[] = ['/'];
    path.reduce((pre, current) => {
      arr.push([pre, current].join('/'));
      return [pre].concat([current]).join('/');
    });
    return arr;
  };

  const handleMenuItemClick = (item: RoutesArray) => {
    if (item.component) {
      return history.push(item.path);
    }
    return null;
  };

  const renderTitle = (t: RoutesArray) => (
    <span>
      {t.icon && <IconFont type={t.icon} />}
      <span>{t.name}</span>
    </span>
  );
  const getMenuItems = (data: RoutesArray[] = []): React.ReactNode[] =>
    data.map((item) => {
      if (item.show === false) return null;
      if (item.children) {
        return (
          <Menu.SubMenu key={item.path} title={renderTitle(item)}>
            {getMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.path} onClick={() => handleMenuItemClick(item)}>
          {item.icon && <IconFont type={item.icon} />}
          {item.name}
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
