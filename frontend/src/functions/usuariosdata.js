import { Space } from 'antd';
import {
  Link
} from "react-router-dom";

const columns = [
  {
    title: 'Nombre colaborador',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Puesto',
    dataIndex: 'place',
    key: 'place',
  },
  {
    title: 'Horario',
    dataIndex: 'schedule',
    key: 'schedule',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to="/updateuser">Ver usuario</Link>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Maria Bonilla',
    place: 'Cocinera',
    schedule: 'Mañana'
  },
  {
    key: '2',
    name: 'Marco Solis',
    place: 'Miscelaneo',
    schedule: 'Mañana'
  },
  {
    key: '3',
    name: 'Jimena Arce',
    place: 'Teacher',
    schedule: 'Tarde'
  },
];

export { columns, data }
