import { Typography, Row, Col, Form, Input, Comment, Button } from 'antd'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { getById, openTicket, closeTicket, progressTicket } from '../functions/tickets'
import { addComment } from '../functions/comments'
import { AuthState } from '../store/store'

const TicketDetails = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [comment, setComment] = useState('')
  const [ticket, setTicket] = useState({
    id: id,
    subject: '',
    description: ''
  })
  const [authState, ] = useRecoilState(AuthState)

  useEffect(() => {
    (async () =>{
      const ticketResponse = await getById(authState.token, id)
      setTicket(ticketResponse.data)
      setLoading(false)
    })()
  }, [id, setTicket, authState])

  const openClick = async () => {
    await addComment(authState.token, {
      createdBy: authState.id,
      idTicket: ticket.id,
      commenttext: comment,
    })
    await openTicket(authState.token, ticket.id)
    const ticketResponse = await getById(authState.token, id)
    setTicket(ticketResponse.data)
    setComment('')
  }
  
  const progressClick = async () => {
    await addComment(authState.token, {
      createdBy: authState.id,
      idTicket: ticket.id,
      commenttext: comment,
    })
    await progressTicket(authState.token, ticket.id)
    const ticketResponse = await getById(authState.token, id)
    setTicket(ticketResponse.data)
    setComment('')
  }
  
  const closeClick = async () => {
    await addComment(authState.token, {
      createdBy: authState.id,
      idTicket: ticket.id,
      commenttext: comment,
    })
    await closeTicket(authState.token, ticket.id)
    const ticketResponse = await getById(authState.token, id)
    setTicket(ticketResponse.data)
    setComment('')
  }

  if(loading)
    return <div>Cargando...</div>

  return (
    <div>
      <Row align="middle" justify="space-around">
        <Col>
          <Typography.Title level={1}>Detalles del ticket {ticket.id}</Typography.Title>
        </Col>
      </Row>
      <Row align="middle" justify="space-around">
        <Form.Item
          label="Asunto"
        >
          <Input value={ticket.subject} disabled />
        </Form.Item>
      </Row>
      <Row align="middle" justify="space-around">
        <Form.Item
          label="Descripción"
          rules={[{ required: true, message: 'Es necesario ingresar una descripción.' }]}
        >
          <Input.TextArea value={ticket.description} disabled />
        </Form.Item>
      </Row>
      <Row align="middle" justify="space-around">
        <Form.Item
          label="Servicio"
        >
          <Input value={ticket.idServiceNavigation.servicename} disabled />
        </Form.Item>
      </Row>
      <Row align="middle" justify="space-around">
        <Form.Item
          label="Estado"
        >
          <Input value={ticket.idTicketstatusNavigation.statusname} disabled />
        </Form.Item>
      </Row>
      <Row align="middle" justify="space-around">
        {
          ticket.comments.map((x) =>
            <Comment
              style={{width: '80%'}}
              key={x.id}
              author={x.createdbyNavigation.fullname}
              content={
                <p>
                  {x.commenttext}
                </p>
              }
            />
          )
        }
      </Row>
      <Row align="middle" justify="space-around">
        <Form.Item
          label="Agregar comentario"
          rules={[{ required: true, message: 'Es necesario ingresar una descripción.' }]}
        >
          <Input.TextArea value={comment} onChange={(e) => setComment(e.target.value)} />
        </Form.Item>
      </Row>
      <Row align="middle" justify="center">
        <Button onClick={openClick}>Agregar comentario y dejar pendiente</Button> &nbsp;&nbsp;&nbsp;
        <Button onClick={progressClick}>Agregar comentario y dejar en proceso</Button> &nbsp;&nbsp;&nbsp;
        <Button onClick={closeClick}>Agregar comentario y cerrar</Button>
      </Row>
      <br />
    </div>
  )
}

export default TicketDetails
