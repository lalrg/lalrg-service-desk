import { Space } from 'antd';
import {
  Link
} from "react-router-dom";

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Rol',
    dataIndex: 'place',
    key: 'place',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to="/updateuser">Actualizar usuario</Link>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Ejemplo 3',
    place: 'Administrador',
  },
  {
    key: '2',
    name: 'Ejemplo 2',
    place: 'Usuario',
  },
  {
    key: '3',
    name: 'Ejemplo 1',
    place: 'Agente',
  },
];

export { columns, data }
