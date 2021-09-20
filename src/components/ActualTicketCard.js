import { List, Card, Tag, Typography } from "antd"

const { Title} = Typography

const ActualTicketCard = ({ticket}) => {
  return (
    <List.Item>
    <Card
      style={{width: 300, marginTop: 16}}
      actions={[
        <Tag color="volcano">{ticket.agent}</Tag>,
        <Tag color="magenta"> Desk {ticket.desk}</Tag>,
      ]}
    >
      <Title> N° {ticket.number} </Title>
    </Card>
  </List.Item>
  )
}

export default ActualTicketCard
