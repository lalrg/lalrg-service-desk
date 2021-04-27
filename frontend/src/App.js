import "antd/dist/antd.css";
import { Layout, Row, Col, Typography } from "antd";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

import AppSideMenu from "./components/AppSideMenu";
import Routes from "./Routes";
import { AuthState } from "./store/store";

const { Header, Content, Footer } = Layout;

const AppHeader = () => (
  <Header style={{ background: "#fff" }}>
    <Row gutter={20} align="middle" justify="space-around">
      <Col style={{ padding: "10px" }} sm={24}>
        <Typography.Title align="center" level={2}>
          Service Desk
        </Typography.Title>
      </Col>
    </Row>
  </Header>
);

function App() {
  const [authState, setAuthState] = useRecoilState(AuthState);
  useEffect(() => {
    if (!authState) {
      const existingToken = localStorage.getItem("authToken");
      const userName = localStorage.getItem("userName");
      const role = localStorage.getItem("role");
      const id = localStorage.getItem("id");
      if (existingToken && userName && role && id)
        setAuthState({token: existingToken, userName, role, id});
    }
  });

  return (
    <div>
      <Layout>
        <Content style={{ padding: "0" }}>
          <AppHeader />
          <Layout
            className="site-layout-background"
            style={{
              padding: "10px 5px",
              maxHeight: "85vh",
              minHeight: "85vh",
            }}
          >
            <AppSideMenu />
            <Content
              style={{
                paddingRight: "10px",
                paddingLeft: "10px",
                minHeight: 280,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  height: "100%",
                  minWidth: "100%",
                  overflow: "auto",
                }}
              >
                <Routes />
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Service Desk ©2021</Footer>
      </Layout>
    </div>
  );
}

export default App;
