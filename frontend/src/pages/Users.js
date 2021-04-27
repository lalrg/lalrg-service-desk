import { Row, Col, Typography, Table } from "antd";

import { Link } from "react-router-dom";

import { data } from "../functions/usuariosdata";
import columns from '../config/usersTableColumns'

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
);

export default Users;
