import { Link } from 'react-router-dom'

const ticketsTableConfig = [
  {
    title: 'Código',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Servicio',
    dataIndex: 'servicename',
    key: 'servicename',
  },
  {
    title: 'Asunto',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Creado por',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
  {
    title: 'Fecha Creado',
    dataIndex: 'createdate',
    key: 'createdate',
  },
  {
    title: '',
    key: 'actions',
    render: (text, record) => (
      <Link to={`/TicketDetails/${record.id}`}>Ver detalles</Link>
    )
  }
]

export default ticketsTableConfig