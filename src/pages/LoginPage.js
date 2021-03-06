import { useState } from 'react'
import { Redirect } from 'react-router'
import { SaveOutlined } from '@ant-design/icons'
import { Form, Input, Button, InputNumber } from 'antd'
import ContentHeader from '../components/ContentHeader'
import getUserStorage from '../helpers/getUserStorage'
import useHideMenu from '../hooks/useHideMenu'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
}

const LoginPage = ({history}) => {
  const [user, ] = useState(getUserStorage())

  useHideMenu(false)
  
  const onFinish = ({agent, desk}) => {
    localStorage.setItem('agent', agent)
    localStorage.setItem('desk', desk)
    history.push('/desk')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  if(user.agent && user.desk){
    return <Redirect to="/desk" />
  }

  return (
    <>
      <ContentHeader 
        title="Login"
        text="Enter your name and your desktop number"
      />
      <Form
        {...layout}
        name="basic" autoComplete="off"
        onFinish={onFinish} onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Agent's Name" name="agent"
          rules={[
            { required: true, message: 'Please input your name!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk" name="desk"
          rules={[ 
            { required: true, message: 'Please input your desk number!' },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout} >
          <Button  type="primary" htmlType="submit" shape="round"> 
            <SaveOutlined />
            Login 
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginPage
