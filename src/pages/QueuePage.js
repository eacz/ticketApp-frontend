import { useContext, useEffect, useState } from "react";
import { Row, Col, List, Divider } from "antd"
import ContentHeader from "../components/ContentHeader";
import { SocketContext } from "../context/SocketContext";
import useHideMenu from "../hooks/useHideMenu";
import HistoryTicketCard from "../components/HistoryTicket";
import ActualTicketCard from "../components/ActualTicketCard";
import getLastTickets from "../helpers/getLastTickets";


const QueuePage = () => {

  useHideMenu(true)
  const [tickets, setTickets] = useState([])
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    socket.on('assigned-tickets', (asignedTickets) => {
      setTickets(asignedTickets);
    })
    return () => {
      socket.off('assigned-tickets')
    }
  }, [socket])

  useEffect(() => {
    getLastTickets()
      .then(lastTickets => setTickets((lastTickets)))
  }, [])

  return (
    <>
      <ContentHeader 
        title="Serving client"
      />
      <Row>
        <Col span={12}>
          <List 
            dataSource={tickets.slice(0,3)}
            renderItem={(item) => (
             <ActualTicketCard ticket={item } />
            )}
          />
        </Col>
        
        <Col span={12}>
            <Divider> History </Divider>
            <List 
              dataSource={tickets.slice(3)}
              renderItem={(item) => (
                <HistoryTicketCard ticket={item} />
              )}
            />
        </Col>
      </Row>
    </>
  )
}

export default QueuePage
