import { Row, Col, Typography, Table } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { getAllUsers } from '../functions/users'
import columns from '../config/usersTableColumns'
import { AuthState } from '../store/store'

const Users = () => {
  const [usersList, setUsersList] = useState([])
  const [authState,] = useRecoilState(AuthState)
  useEffect(() => {
    (async () => {
      const users = await getAllUsers(authState.token)
      const mappedUsers = users.data.map(x => ({
        ...x,
        role: x.idRoleNavigation.rolename,
        key: x.id
      }))
      setUsersList(mappedUsers)
    })()
  }, [authState, setUsersList])
  return (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <Typography.Title level={1}>Usuarios</Typography.Title>
        </Col>
      </Row>

      <Row align="middle" justify="space-around">
        <Col>

          <Link to="/AddUser">Añadir Usuario</Link>
          <br />
          <br />
          <Table columns={columns} dataSource={usersList} />
        </Col>
      </Row>
    </>
  )
};

export default Users;
