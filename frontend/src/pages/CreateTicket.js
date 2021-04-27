import { Row, Col, Typography, Form, Input, Button, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'

import { AuthState } from '../store/store'
import { getServices } from '../functions/services'
import { postNewTicket } from '../functions/tickets'

const { Option } = Select



const CreateTicket = () => {
  const onFinish = async () => {
    const response = await postNewTicket(authInfo.token, ticketData)
    if(response.data === true)
      history.push("/MyTickets");
  }
  const onServiceSelected = (e) => setTicketData({ ...ticketData, idService: e })
  const onSubjectInput = ({target}) => setTicketData({ ...ticketData, subject: target.value })
  const onDescriptionInput = ({target}) => setTicketData({ ...ticketData, description: target.value })

  const history = useHistory();
  const [services, setServices] = useState([])
  const [authInfo,] = useRecoilState(AuthState);
  const [ticketData, setTicketData] = useState({
    subject: '',
    description: '',
    idService: null,
  })

  useEffect(() => {
    (async () => {
      const servicesResponse = await getServices(authInfo.token)
      if(servicesResponse)
        setServices(servicesResponse)
    })()
  }, [authInfo.token])

  return (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <Typography.Title level={1}>Crear ticket</Typography.Title>
        </Col>
      </Row>
      <Form onFinish={onFinish}>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Asunto"
            name="subject"
            rules={[{ required: true, message: 'Es necesario ingresar un asunto.' }]}
          >
            <Input value={ticketData.subject} onInput={onSubjectInput} />
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Descripción"
            name="Description"
            rules={[{ required: true, message: 'Es necesario ingresar una descripción.' }]}
          >
            <Input.TextArea value={ticketData.description} onInput={onDescriptionInput} />
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item
            label="Servicio"
            name="service"
            rules={[{ required: true, message: 'Es necesario seleccionar un servicio.' }]}
          >
            <Select size="large" style={{ width: 220 }} value={ticketData.description}  onChange={onServiceSelected}>
              {services.map(x => {
                return <Option value={x.id} key={x.id}>{x.servicename}</Option>
              })}
            </Select>
          </Form.Item>
        </Row>
        <Row align="middle" justify="space-around">
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Crear ticket
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default CreateTicket;
