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

const key = "updatable";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const openMessage = () => {
  message.loading({ content: "Cargando...", key });
  setTimeout(() => {
    message.success({ content: "Éxito", key, duration: 2 });
  }, 1000);
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const EditarUsuario = () => (
  <Col span={13} offset={4}>
    <Form {...layout} name="nest-messages">
      <Form.Item
        label="Cédula"
        rules={[
          {
            required: true,
            message: "La cédula es requerida",
          },
        ]}
      >
        <Input value="999999999" />
      </Form.Item>
      <Form.Item
        label="Nombre"
        rules={[
          {
            required: true,
            message: "El nombre es requerido",
          },
        ]}
      >
        <Input value="xxxxxxxxxxxx" />
      </Form.Item>

      <Form.Item
        label="Primer Apellido"
        rules={[
          {
            required: true,
            message: "El apellido es requerido",
          },
        ]}
      >
        <Input value="xxxxxxxxxxxxxxx" />
      </Form.Item>

      <Form.Item
        label="Segundo Apellido"
        rules={[
          {
            required: false,
            message: "El apellido es requerido",
          },
        ]}
      >
        <Input value="xxxxxxxxxxx" />
      </Form.Item>

      <Form.Item name="date-picker" label="Fecha de nacimiento">
        &nbsp;
        <DatePicker placeholder="Seleccione fecha" />
      </Form.Item>

      <Form.Item name="date-picker" label="Puesto:">
        &nbsp;
        <>
          <Select
            defaultValue="<none>"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Administrador">Administrador</Option>
            <Option value="Asistente">Asistente</Option>
            <Option value="Teacher">Teacher</Option>
            <Option value="Cocinero">Cocinero</Option>
            <Option value="Miscelaneo">Miscelaneo</Option>
          </Select>
        </>
        ,
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" onClick={openMessage}>
          GUARDAR
        </Button>
      </Form.Item>
    </Form>
  </Col>
);

const AddUser = () => (
  <>
    <Row align="middle" justify="space-around">
      <Col>
        <Typography.Title level={1}>Añadir Usuario</Typography.Title>
      </Col>
    </Row>
    <br />
    <br />
    <Row justify="start">
      <EditarUsuario />
    </Row>
  </>
);

export default AddUser;
