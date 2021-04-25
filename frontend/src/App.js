import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';

import AppSideMenu from './components/AppSideMenu';
import Routes from './Routes'

const { Header, Content, Footer } = Layout;

const AppHeader = () => (
  <Header style={{ background: '#fff' }}>
    <Row gutter={20} align="middle" justify="space-around">
      <Col xs={0} sm={0} md={3}>
        <img
          alt=""
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '60px',
          }}
          src="/logo.png"
        />
      </Col>
      <Col style={{ paddingBottom: '10px' }} sm={24} md={21}>
        <Typography.Title level={2}>
          Sistema de registro de niños
        </Typography.Title>
      </Col>
    </Row>
  </Header>
)

function App() {
  return (
    <div>
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0' }}>
          <Layout className="site-layout-background" style={{ padding: '10px 5px', maxHeight: '85vh', minHeight: '85vh' }}>
            <AppSideMenu />
            <Content style={{ padding: '10px', minHeight: 280 }}>
              <div
                style={{
                  background: '#fff',
                  maxHeight: '85vh',
                  minHeight: '85vh',
                  minWidth: '100%',
                  overflow: 'auto'
                }}
              >
                <Routes />
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Gotitas de Sabiduría ©2021</Footer>
      </Layout>
    </div>
  );
}
export default App;
