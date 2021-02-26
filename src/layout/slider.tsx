import { Layout, Menu } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const menus = [{
  key: 'user',
  title: '用户管理',
  icon: UserOutlined,
  children: [
    {
      key: 'user1-1',
      title: '用户管理1'
    },
    {
      key: 'user1-2',
      title: '用户管理2'
    }
  ]
}, {
  key: 'user2',
  title: '用户管理2',
  icon: LaptopOutlined,
  children: [
    {
      key: 'user2-1',
      title: '用户管理222'
    },
    {
      key: 'user2-2',
      title: '用户管理333'
    }
  ]
}]

const defaultOpenKeys = [menus[0].key]
const defaultSelectedKeys = [menus[0].children[0].key]

export default () => {

  return <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      inlineCollapsed={true}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      style={{ height: '100%', borderRight: 0 }}
    >
      {
        menus.map(menu => <SubMenu key={menu.key} icon={<menu.icon />} title={menu.title}>
          {
            menu.children?.map(m => <Menu.Item key={m.key}>{m.title}</Menu.Item>)
          }
        </SubMenu>)
      }
    </Menu>
  </Sider>
}
