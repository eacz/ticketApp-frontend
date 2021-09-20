import { Col, Row, Typography } from 'antd'
import React from 'react'
const { Text } = Typography

const AttendingTicket = ({ ticket }) => {
  return (
    <Row>
      <Col>
        <Text>you are attending the number:</Text>
        <Text style={{ fontSize: 30 }} type='danger'> {ticket.number} </Text>
      </Col>
    </Row>
  )
}

export default AttendingTicket
