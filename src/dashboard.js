import React from 'react'
import { Layout,Menu, Button, Avatar} from 'antd';
import {
  WalletFilled,
  FileOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import SignIn from './config/provider'
import './app.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    usuario:''
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  onSign = async() =>{
    const res = await SignIn();
    this.setState({usuario: res.displayName})
  } 

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} width={400} collapsedWidth={200}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" inlineIndent={24} defaultOpenKeys={['sub1','sub2']}>
            <Menu.Item key="1">
                <>
                <Avatar size="large" src={`https://avatars.dicebear.com/api/pixel-art/${this.state.usuario}.svg`} /> 
                Bienvenido {this.state.usuario}
                </>
            </Menu.Item>
            <SubMenu key="sub1" icon={<WalletFilled />} title="Wallets">
              <Menu.Item key="3" danger>Wal1</Menu.Item>
              <Menu.Item key="4" disabled>Wal2</Menu.Item>
              <Menu.Item key="5">Wal3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DollarOutlined />} title="Category">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button type="primary" style={{ margin: '16px' }} onClick={this.onSign}>Iniciar sesion</Button>
            </Header>
          <Content style={{ margin: '0 16px' }}>

          </Content>
          <Footer style={{ textAlign: 'center' }}>My Buddy Budget Alejandro Olmedo</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo