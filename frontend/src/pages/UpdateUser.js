import { Row, 
  Col, 
  Typography, 
  Form, 
  Input,
  Button, 
  DatePicker,
  message,
  AutoComplete } from 'antd'

const key= 'updatable';

const openMessage = () => {

  message.loading({ content: 'Cargando...', key });
  setTimeout(() => {
    message.success({ content: 'Éxito', key, duration: 2 });
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

const AutocompleteOptions = [
  { value: 'José Pérez' },
  { value: 'María Rodrígues' },
  { value: 'Héctor Gomez' },
];


const AutocompleteOptionsPlace = [
  { value: 'Administrativo' },
  { value: 'Teacher' },
  { value: 'Cocinero' },
  { value: 'Asistente' },
  { value: 'Miscelaneo' },
];

const EditarUsuario = () => (
  <Col span={13} offset={4}>
    <Form {...layout} name="nest-messages" >
      <Form.Item
        label="Cédula"
        rules={[
          {
            required: true,
            message: 'La cédula es requerida',
          },
        ]}
      >
        <Input value="9999999999" />
      </Form.Item>
      <Form.Item
        label="Nombre"
        rules={[
          {
            required: true,
            message: 'El nombre es requerido',
          },
        ]}
      >
        <Input value="Luis" />
      </Form.Item>

      <Form.Item
        label="Primer Apellido"
        rules={[
          {
            required: true,
            message: 'El apellido es requerido',
          },
        ]}
      >
        <Input value="Mendez" />
      </Form.Item>



      <Form.Item
        label="Segundo Apellido"
        rules={[
          {
            required: false
            
          },
        ]}
      >
        <Input value="Zamora" />
      </Form.Item>




      <Form.Item 
        name="date-picker" 
        label="Fecha de Nacimiento">:&nbsp;
        <DatePicker placeholder="Seleccione fecha" />
      </Form.Item>

      <Form.Item 
        name="date-picker" 
        label="Fecha Contrato">:&nbsp;
        <DatePicker placeholder="Seleccione fecha" />
      </Form.Item>
     

      <Form.Item 
        name="Puesto" 
        label="Puesto">
        <AutoComplete
          style={{
            width: 200,
          }}
          value="<none>"
          options={AutocompleteOptionsPlace}
          placeholder="Ingresar una parte del nombre"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Form.Item>


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" onClick={openMessage}>
    GUARDAR
  </Button>
      </Form.Item>
    </Form>
  </Col>
)

const UpdateUser = () => (
  <>
    <Row align="middle" justify="space-around">
      <Col>
        <Typography.Title level={1}>Perfil</Typography.Title>
      </Col>
    </Row>
    <br/>
    <br/>
    <Row justify="start">
      <EditarUsuario />
    </Row>


  </>
)

export default UpdateUser
