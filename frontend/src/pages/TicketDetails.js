import { Typography } from 'antd'
import { useParams } from 'react-router-dom'

const TicketDetails = () => {
  const { id } = useParams()
  return (
    <Typography.Title level={1}>Details of ticket id {id}</Typography.Title>
  )
}

export default TicketDetails
