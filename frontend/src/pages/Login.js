import { Row, Col, Typography, Card, Form, Input, Button, Checkbox } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const Login = () => (
  <>
    <Row align="middle" justify="space-around">
      <Col>
        <Typography.Title level={1}>Login</Typography.Title>
      </Col>
    </Row>
    <Row align="middle" justify="space-around">
      <Col>
        <Card style={{ width: 500 }}>
          <br />
          <br />
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Correo electrónico"
              name="username"
              rules={[{ required: true, message: 'El correo electrónico es requerido.' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'La contraseña es requerida.' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Recordar datos</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  </>
)

export default Login