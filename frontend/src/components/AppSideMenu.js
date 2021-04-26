import { withRouter, Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
  IdcardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRecoilValue, useRecoilState } from "recoil";

import { isLoggedInSelector } from "../store/selectors";
import { AuthState } from "../store/store";

const { Sider } = Layout;

const LoggedInSideMenu = () => {
  const [, setAuthState] = useRecoilState(AuthState);
  const onLogout = () => {
    setAuthState(false);
    localStorage.clear();
  };
  return (
    <Sider width={200}>
      <Menu mode="inline" defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
        <Menu.Item key="2" icon={<PlusCircleOutlined />}>
          <Link to="/users">Crear ticket</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/users">Ver mis tickets</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<UnorderedListOutlined />}>
          <Link to="/users">Todos los tickets</Link>
        </Menu.Item>

        <Menu.Item key="6" icon={<TeamOutlined />}>
          <Link to="/users">Usuarios</Link>
        </Menu.Item>

        <Menu.Item key="7" icon={<IdcardOutlined />}>
          <Link to="/users">Mi perfil</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<LogoutOutlined />} onClick={onLogout}>
          Salir
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const LoggedOutSideMenu = () => (
  <Sider width={200}>
    <Menu mode="inline" defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
      <Menu.Item key="1">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

const AppSideMenu = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  if (isLoggedIn) return <LoggedInSideMenu />;
  return <LoggedOutSideMenu />;
};

export default withRouter(AppSideMenu);
