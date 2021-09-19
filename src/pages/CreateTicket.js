import { useContext, useState } from "react";
import { Button, Col, Row, Typography } from "antd"
import { DownloadOutlined } from '@ant-design/icons';
import ContentHeader from "../components/ContentHeader"
import useHideMenu from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";

const { Text  } = Typography

const CreateTicket = () => {

  useHideMenu(true)

  const { socket } = useContext(SocketContext)
  const [actualTicket, setActualTicket] = useState(null)

  const newTicket = () => {
    socket.emit('request-ticket', null, (ticket) => { 
      setActualTicket(ticket)
    })
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
      { actualTicket && 
        <Row style={{marginTop: 100}} >
          <Col span={14} offset={6} align="center" >
            <Text level={2} >Your number is: </Text>
            <br />
            <Text type="success" style={{fontSize: 55}}>{actualTicket.number}</Text>
          </Col>
        </Row>
      
      }
    </>
  )
}

export default CreateTicket
