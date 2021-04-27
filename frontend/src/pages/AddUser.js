import {
  Row,
  Col,
  Select,
  Typography,
  Form,
  Input,
  Button,
  DatePicker,
  message,
} from "antd";
import { useState, useEffect } from "react";
import { useRecoilState } from 'recoil'
import { useHistory, useParams } from 'react-router-dom'

import { AuthState } from '../store/store'
import { getAllRoles } from '../functions/roles'
import { addUserRequest, getById, updateUserRequest } from '../functions/users'

const { Option } = Select

const AddUser = ({view}) => {

  const [roles, setRoles] = useState([])
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    idRole: '',
    phone:'',
    id: undefined
  })
  const [authState,] = useRecoilState(AuthState)

  const history = useHistory()
  const params = useParams()

  useEffect(()=>{
    (async () => {
      const rolesResponse = await getAllRoles(authState.token)
      setRoles(rolesResponse.data)
      if (view === "profile") {
        const responseUser = await getById(authState.token, authState.id)
        setUser({...responseUser.data})
      }
      if (view === "update") {
        const responseUser = await getById(authState.token, params.id)
        setUser({...responseUser.data})
      }
    })()
  }, [setRoles, setUser, authState, view, params])

  useEffect(() => {
    console.log(user);
  }, [user])

  const onFinish = async () => {
    const result = !view? await addUserRequest(authState.token, user): await updateUserRequest(authState.token, user);
    if (result) {
      history.push('/')
    }
  }
  const onNameInput = ({target}) => {
    setUser({ ...user, fullname: target.value })
  }
  const onEmailInput = ({target}) => {
    setUser({ ...user, email: target.value })
  }
  const onPasswordInput = ({target}) => {
    setUser({ ...user, password: target.value })
  }
  const onRoleChange = (value) => {
    setUser({ ...user, idRole: value })
  }
  const onPhoneChange = ({target}) => {
    setUser({ ...user, phone: target.value })
  }

  return (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <Typography.Title level={1}>{view==="update"?"Actualizar usuario": view==="profile"?"Actualizar mi cuenta" : "Crear usuario"}</Typography.Title>
        </Col>
      </Row>
      <br />
      <br />
      <Form onFinish={onFinish}>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Nombre completo"
            rules={[{ required: true, message: 'Es necesario ingresar un nombre.' }]}
          >
            <Input value={user.fullname} onInput={onNameInput} />
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Correo Electrónico"
            rules={[{ required: true, message: 'Es necesario ingresar un correo electrónico.' }]}
          >
            <Input type="email" value={user.email} onInput={onEmailInput} />
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Teléfono"
            rules={[{ required: true, message: 'Es necesario ingresar un número telefónico.' }]}
          >
            <Input value={user.phone} onInput={onPhoneChange} />
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Contraseña"
          >
            <Input type="password" value={user.password} onInput={onPasswordInput} />
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Rol"
            rules={[{ required: true, message: 'Es necesario seleccionar un rol.' }]}
          >
            <Select size="large" style={{ width: 220 }} value={user.idRole} onChange={onRoleChange} >
              {
                roles.map(x => <Option value={x.id} key={x.id}>{x.rolename}</Option>)
              }
            </Select>
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item >
            <Button type="primary" htmlType="submit">
              {!view ?"Crear usuario" : "Actualizar datos"}
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  )
};

export default AddUser;
