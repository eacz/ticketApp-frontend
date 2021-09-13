import { Button, Col, Row, Typography } from "antd"
import ContentHeader from "../components/ContentHeader"
import { DownloadOutlined } from '@ant-design/icons';
import useHideMenu from "../hooks/useHideMenu";

const { Text  } = Typography

const CreateTicket = () => {

  useHideMenu(true)

  const newTicket = () => {
    console.log('new ticket');
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center" >
          <ContentHeader 
            title="Press the button to create a new ticket"
          />
          <Button
            type="primary" shape="round" size="large" 
            onClick={newTicket} icon={<DownloadOutlined />}
          >
            New Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{marginTop: 100}} >
        <Col span={14} offset={6} align="center" >
          <Text level={2} >Your number is: </Text>
          <br />
          <Text type="success" style={{fontSize: 55}}>23</Text>
        </Col>
      </Row>
    </>
  )
}

export default CreateTicket
