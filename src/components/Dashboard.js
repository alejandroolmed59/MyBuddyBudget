import React from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  WalletFilled,
  FileOutlined,
  DollarOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Expenses from "./expenses/Expenses";
import AuthContext from "../context/auth-context";
import "../app.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <AuthContext.Consumer >
        {({currentUser})=>
        (<Layout style={{ minHeight: "100vh", maxWidth: "99%" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            width={400}
            collapsedWidth={200}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["0"]}
              mode="inline"
              inlineIndent={24}
              defaultOpenKeys={["sub1", "sub2"]}
            >
              <Menu.Item key="0" icon={<HomeOutlined />}>
                My buddy budget
              </Menu.Item>
              <Menu.Item
                key="1"
                icon={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/jdenticon/usuario.svg`}
                  />
                }
              >
                Bienvenido {currentUser.displayName}
              </Menu.Item>
              <SubMenu key="sub1" icon={<WalletFilled />} title="Wallets">
                <Menu.Item key="3" danger>
                  Wal1
                </Menu.Item>
                <Menu.Item key="4" disabled>
                  Wal2
                </Menu.Item>
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
            <Header className="site-layout-background"></Header>
            <Content className="content-layout">
              <Expenses />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              My Buddy Budget Alejandro Olmedo
            </Footer>
          </Layout>
        </Layout>)
      }
      </AuthContext.Consumer>
    );
  }
}
export default Dashboard;
