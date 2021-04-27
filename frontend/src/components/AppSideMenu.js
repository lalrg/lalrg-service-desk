import { withRouter, Link, useHistory } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
  IdcardOutlined,
  LogoutOutlined,
  HistoryOutlined
} from "@ant-design/icons";
import { useRecoilValue, useRecoilState } from "recoil";

import { isLoggedInSelector } from "../store/selectors";
import { AuthState } from "../store/store";

const { Sider } = Layout;

const LoggedInSideMenu = () => {
  const [authState, setAuthState] = useRecoilState(AuthState);
  const history = useHistory();
  const onLogout = () => {
    setAuthState(false);
    localStorage.clear();
    history.push("/")
  };

  return (
    <Sider width={200}>
      <Menu mode="inline" defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
        <Menu.Item key="2" icon={<PlusCircleOutlined />}>
          <Link to="/CreateTicket">Crear ticket</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/MyTickets">Ver mis tickets</Link>
        </Menu.Item>

        {
          authState.role === "Administrador" &&
            <>
              <Menu.Item key="4" icon={<HistoryOutlined />}>
                <Link to="/ClosedTickets">Ver tickets cerrados</Link>
              </Menu.Item>
      
              <Menu.Item key="5" icon={<UnorderedListOutlined />}>
                <Link to="/Tickets">Todos los tickets</Link>
              </Menu.Item>
      
              <Menu.Item key="6" icon={<TeamOutlined />}>
                <Link to="/users">Usuarios</Link>
              </Menu.Item>
            </>
        }

        <Menu.Item key="7" icon={<IdcardOutlined />}>
          <Link to="/MyProfile">Mi perfil</Link>
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
