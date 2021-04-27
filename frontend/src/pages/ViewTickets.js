import { Typography, Row, Col, Table } from 'antd'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'

import { AuthState } from '../store/store'
import { getAllTickets, getMyTickets, getClosedTickets } from '../functions/tickets'
import ticketsTableColumns from '../config/ticketsTableColumns'

const ViewTickets = ({ view }) => {
  const [authState,] = useRecoilState(AuthState)
  const [tickets, setTickets] = useState([])
  useEffect(()=> {
    (async ()=>{
      let allTickets = []
      if(view ==="my")
        allTickets = await getMyTickets(authState.token)
      if(view ==="all")
        allTickets = await getAllTickets(authState.token)
      if(view ==="closed")
        allTickets = await getClosedTickets(authState.token)

      if(allTickets)
        if(allTickets.data){
          const mappedTickets = allTickets.data.map(x => (
            {
              ...x, 
              key: x.id,
              servicename: x.idServiceNavigation.servicename,
              createdBy: x.createdbyNavigation.fullname
            }))
          setTickets(mappedTickets)
          console.log(mappedTickets)
        }
    })()
  }, [authState, setTickets, view])

  return (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <Typography.Title level={1}>{view==="my" ? "Mis tickets" : "Todos los tickets"}</Typography.Title>
        </Col>
      </Row>
      <Row align="middle" justify="space-around">
        <Col span={18}>
          <Link to="CreateTicket">Crear nuevo</Link>
        </Col>
      </Row>
      <br />
      <Row align="middle" justify="space-around">
        <Col>
          <Table dataSource={tickets} columns={ticketsTableColumns} />;
        </Col>
      </Row>
    </>
  );
};

export default ViewTickets;
