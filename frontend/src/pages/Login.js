import { Row, Col, Typography, Card, Form, Input, Button } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { Authenticate } from "../functions/auth";
import { AuthState } from "../store/store";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAuthState] = useRecoilState(AuthState);
  const onLogin = async () => {
    const token = await Authenticate(email, password);
    setAuthState(token);
    localStorage.setItem("authToken", token);
  };
  const onEmailInput = (e) => setEmail(e.target.value);
  const onPasswordInput = (e) => setPassword(e.target.value);

  return (
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
            <Form {...layout} name="basic">
              <Form.Item
                label="Correo electrónico"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "El correo electrónico es requerido.",
                  },
                ]}
              >
                <Input value={email} onInput={onEmailInput} />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                  { required: true, message: "La contraseña es requerida." },
                ]}
              >
                <Input.Password value={password} onInput={onPasswordInput} />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={onLogin}>
                  Ingresar
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
