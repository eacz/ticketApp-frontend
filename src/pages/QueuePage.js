import { Row, Col, Typography, List, Card, Tag, Divider } from "antd"
import ContentHeader from "../components/ContentHeader";

const { Title, Text } = Typography

//Fake data for now
const data = [
  {
      ticketNo: 33,
      desk: 3,
      agent: 'Esteban Canteros'
  },
  {
      ticketNo: 34,
      desk: 4,
      agent: 'Elliot Alderson'
  },
  {
      ticketNo: 35,
      desk: 5,
      agent: 'Geralt of Rivia'
  },
  {
      ticketNo: 36,
      desk: 3,
      agent: 'Esteban Canteros'
  },
  {
      ticketNo: 37,
      desk: 3,
      agent: 'Esteban Canteros'
  },
  {
      ticketNo: 38,
      desk: 2,
      agent: 'Elliot Alderson'
  },
  {
      ticketNo: 39,
      desk: 5,
      agent: 'Geralt of Rivia'
  },
];

const QueuePage = () => {
  return (
    <>
      <ContentHeader 
        title="Serving client"
      />
      <Row>
        <Col span={12}>
          <List 
            dataSource={data.slice(0,3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{width: 300, marginTop: 16}}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta"> Desk {item.desk}</Tag>,
                  ]}
                >
                  <Title> N° {item.ticketNo} </Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        
        <Col span={12}>
            <Divider> History </Divider>
            <List 
              dataSource={data.slice(3)}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta 
                    title={`Ticket N° ${item.ticketNo}`} 
                    description={
                      <>
                        <Text type="secondary" >On desk </Text>
                        <Tag>{item.desk}</Tag>
                        <Text type="secondary" >Agent</Text>
                        <Tag>{item.agent}</Tag>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
        </Col>
      </Row>
    </>
  )
}

export default QueuePage
