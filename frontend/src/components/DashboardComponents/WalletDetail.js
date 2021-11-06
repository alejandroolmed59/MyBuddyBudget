import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Statistic, Card, Button, InputNumber, Select, message } from "antd";
import { ArrowUpOutlined, MoneyCollectOutlined, WalletFilled } from "@ant-design/icons";
import { walletSlice } from "../../redux/slice/walletsSlice";
import AuthContext from "../../context/auth-context";
import axios from 'axios';

const { Option } = Select;

const WalletDetail = ({ wallet }) => {
  const [amount, setAmount] = useState(0);
  const [wallets, setWallets] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState("");
  
  const { currentUser } = useContext(AuthContext);
  const useGetWalletsByName = walletSlice.endpoints.getWalletsByName.useQuery;
  const { data, isLoading } = useGetWalletsByName(currentUser.displayName);
  //wallet.cuenta, wallet.descripcion, wallet.saldo
  useEffect(() => {
    if (!isLoading) setWallets(data);
  }, [data, isLoading]);

  const transferir=async()=>{
    //console.log(selectedWallet)
    //console.log(amount);
    try{
      await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/account/transfer`, {
        walletIdOrigen: wallet.cuenta,
        walletIdDestino: selectedWallet,
        amount:amount
      });
      wallet.saldo-=amount;
      message.success("transferencia realizada con exito")
    }catch(e){
      message.error("ocurrio un error")
    }
  };

  return (
    <Row gutter={[16, 16]} style={{ margin: "3rem" }}>
      <Col span={12}>
        <Card>
          <Statistic title="Account Name" value={wallet.descripcion} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            prefix={<ArrowUpOutlined />}
            title="Account Balance"
            value={wallet.saldo}
            valueStyle={{ color: "#3f8600" }}
            precision={2}
            suffix="$"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Account Type"
            value={wallet.CuentaTypoObj.descripcion}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            prefix={<MoneyCollectOutlined />}
            title="Currecy"
            value={wallet.MonedaObj.descripcion}
          />
        </Card>
      </Col>
      <Col span={24}>
        <InputNumber
          onChange={(value) => {
            setAmount(value);
          }}
        ></InputNumber>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder={
            <>
              <WalletFilled className="site-form-item-icon" /> Select a wallet
            </>
          }
          optionFilterProp="children"
          onChange={(value) => setSelectedWallet(value)}
        >
          {wallets.map((wallet) => {
            return (
              <Option value={wallet.cuenta}>
                {wallet.descripcion} - ${wallet.saldo}
              </Option>
            );
          })}
        </Select>
        <Button onClick={()=>transferir()}>Transferir</Button>
      </Col>
    </Row>
  );
};

export default WalletDetail;
