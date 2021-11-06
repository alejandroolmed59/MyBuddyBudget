import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth-context";
import { Image, Row, Col, Card } from "antd";
import PieChart from "../Statistics/PieChart";
//import axios from "axios";
import {useGetWalletsByNameQuery} from '../../redux/slice/walletsSlice'
import "../../app.css";

const Profile = () => {
  const [assets, setAssets] = useState(0);
  const [wallets, setWallets] = useState([{descripcion:"dolar",saldo:4}]);
  const { currentUser } = useContext(AuthContext);

  const {data, isSuccess} = useGetWalletsByNameQuery(currentUser.displayName);
  useEffect(() => {
    const fetch = async () => {
      if(isSuccess&&data){
        setWallets(data);
        let total = data.reduce((acum, wallet) => {
          return Number(acum) + Number(wallet.saldo);
        }, 0);
        setAssets(total);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);
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
