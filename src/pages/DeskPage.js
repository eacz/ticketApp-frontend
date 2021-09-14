import { useState } from 'react'
import { Redirect } from 'react-router'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Row, Col, Button, Divider, Typography } from 'antd'
import ContentHeader from '../components/ContentHeader'
import getUserStorage, { clearUserStorage } from '../helpers/getUserStorage'
import useHideMenu from '../hooks/useHideMenu'

const { Text } = Typography

const DeskPage = ({history}) => {
  const [ user ] = useState(getUserStorage())
  useHideMenu(false)

  const logout = () => {
    clearUserStorage()
    history.replace('/login')
  }

  const nextTicket = () => {
    console.log('Next Ticket');
  }

  if(!user.agent || !user.desk){
    return <Redirect to="/login" />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <ContentHeader title={user.agent} text={`You're working on desk ${user.desk}`} />
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
