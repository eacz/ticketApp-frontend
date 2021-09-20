import { List, Tag } from "antd"
import Text from "antd/lib/typography/Text"


const HistoryTicketCard = ({ticket}) => {
  return (
    <List.Item>
    <List.Item.Meta 
      title={`Ticket N° ${ticket.number}`} 
      description={
        <>
          <Text type="secondary" >On desk </Text>
          <Tag>{ticket.desk}</Tag>
          <Text type="secondary" >Agent</Text>
          <Tag>{ticket.agent}</Tag>
        </>
      }
    />
  </List.Item>
  )
}

export default HistoryTicketCard
