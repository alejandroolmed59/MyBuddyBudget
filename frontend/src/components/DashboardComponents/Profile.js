import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth-context";
import { Image, Row, Col, Card } from "antd";
import PieChart from "../Statistics/PieChart";
import axios from "axios";
import "../../app.css";

const Profile = () => {
  const [assets, setAssets] = useState(0);
  const [wallets, setWallets] = useState([{descripcion:"dolar",saldo:4}]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/account/${currentUser.displayName}`
      );
      response = await response.data;
      setWallets(response);
      let total = response.reduce((acum, wallet) => {
        return Number(acum) + Number(wallet.saldo);
      }, 0);
      setAssets(total);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-profile ">
      <Image.PreviewGroup>
        <Image
          width={200}
          src={`https://avatars.dicebear.com/api/jdenticon/${currentUser.uid}.svg`}
        />
      </Image.PreviewGroup>
      <Row gutter={24} style={{ marginTop: "3rem" }} justify="space-between">
        <Col span={8}>
          <Card title="Nombre usuario" bordered={false}>
            {currentUser.displayName}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Email" bordered={false}>
            {currentUser.email}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Assets">
              ${assets.toFixed(2)}
          </Card>
        </Col>
      </Row>
        <PieChart wallets={wallets} /> 
    </div>
  );
};

export default Profile;
