import {
  BrowserRouter as Router,
 
  Link
} from "react-router-dom";

import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import Routes from "../router/Routes";
import { useContext } from "react";
import { UiContext } from "../context/UiContext";
const { Sider, Content } = Layout

const RouterPage = () => {
  const { hiddenMenu } = useContext(UiContext)
  return (
    <Router >
      <Layout style={{height: '100vh'}}>
        <Sider hidden={hiddenMenu} collapsedWidth="0" breakpoint="md" >
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<UserOutlined />}>
              <Link to="/login"> Login </Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              <Link to="/queue"> Queue </Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<UploadOutlined />}>
              <Link to="/create"> Create Ticket </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>

          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
            >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default RouterPage
