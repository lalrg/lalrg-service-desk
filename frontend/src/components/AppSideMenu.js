import {
  withRouter, Link
} from "react-router-dom";
import { Menu, Layout } from 'antd'
import { UserOutlined, TeamOutlined, SmileOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const AppSideMenu = () => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <Menu.Item key="1">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SmileOutlined />} >
          <Link to="/users">Crear ticket</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<UserOutlined />} >
          <Link to="/users">Ver mis tickets</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<TeamOutlined />} >
          <Link to="/users">Mi perfil</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<TeamOutlined />} >
          <Link to="/users">Salir</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default withRouter(AppSideMenu);
