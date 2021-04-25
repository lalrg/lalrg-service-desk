import { Row, Col, Typography, Table } from 'antd'

import {
  Link
} from "react-router-dom";

import { columns, data } from '../functions/usuariosdata'


const Users = () => (
  <>
    <Row align="middle" justify="space-around">
      <Col>
        <Typography.Title level={1}>Usuarios</Typography.Title>
      </Col>
    </Row>

    <Row align="middle" justify="space-around">
      <Col>

       
     
        <Table columns={columns} dataSource={data} />
      
        <Link to="/AddUsuario">Añadir Usuario</Link>
      </Col>
      
    </Row>
  </>
)

export default Users