import React from "react";
import { Layout, Menu, Avatar, Button } from "antd";
import {
  DollarOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import AuthContext from "../../context/auth-context";
//import DashboardContext from "../../context/dashboard-context";
import WalletItems from "./WalletItems";
import ManageExpensesAndIncome from "./ManageExpensesAndIncome";
import "../../app.css";
import ModalAddWallet from "../Modals/ModalAddWallet";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    showModalWallet:false
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const {showModalWallet} = this.state;
    return (
      <AuthContext.Consumer>
        {({ currentUser, logout }) => (
          <Layout style={{ minHeight: "100vh", maxWidth: "99%" }}>
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
                <Menu.Item key="0" icon={<HomeOutlined />} onClick={()=>this.props.cb(`${this.props.path}/`)}>
                  My buddy budget
                </Menu.Item>
                <Menu.Item
                  key="1"
                  icon={
                    <Avatar
                      src={`https://avatars.dicebear.com/api/jdenticon/${currentUser.uid}.svg`}
                    />
                  }
                  onClick={() => this.props.cb(`${this.props.path}/profile`)}
                >
                  Bienvenido {currentUser.displayName}
                </Menu.Item>

                <ManageExpensesAndIncome />

                <WalletItems cb={this.props.cb} path={this.props.path} />

                <Menu.Item key="2" icon={<DollarOutlined />} onClick={() =>{this.setState({ showModalWallet:true })}}>
                  Add new Wallet
                </Menu.Item>
                <ModalAddWallet visible={showModalWallet} onCancel={()=>{this.setState({showModalWallet:false}); console.log(this.state)}}/>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background">
                <Button type="primary" onClick={logout}>
                  SignOut
                </Button>
              </Header>
              <Content className="content-layout">
                {this.props.children}
              </Content>
              <Footer style={{ textAlign: "center" }}>
                My Buddy Budget Alejandro Olmedo
              </Footer>
            </Layout>
          </Layout>
        )}
      </AuthContext.Consumer>
    );
  }
}
export default Dashboard;
