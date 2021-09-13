import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Row, Col, Button, Divider, Typography } from 'antd'
import ContentHeader from '../components/ContentHeader'

const { Text } = Typography

const DeskPage = () => {
  const logout = () => {
    console.log('logout')
  }

  const nextTicket = () => {
    console.log('Next Ticket');
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <ContentHeader title='Esteban' text="You're working on desk 5" />
        </Col>
        <Col span={4} align='right'>
          <Button shape='round' type='danger' onClick={logout}>
            <CloseCircleOutlined />
            Logout
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>you are attending the number:</Text>
          <Text style={{fontSize: 30}} type="danger"> 23 </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={nextTicket} shape="round" type="primary"
          > 
            <RightOutlined />
            Next
          </Button>
        </Col>
      </Row>

    </>
  )
}

export default DeskPage
