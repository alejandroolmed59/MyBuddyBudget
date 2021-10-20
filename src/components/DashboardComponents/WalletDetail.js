import React from "react";
import { Row, Col, Statistic, Card } from "antd";
import {ArrowUpOutlined, MoneyCollectOutlined} from '@ant-design/icons'

const WalletDetail = ({ wallet }) => {
  //wallet.cuenta, wallet.descripcion, wallet.saldo
  console.log(wallet);
  return (
    <Row gutter={[16,16]} style={{margin:"3rem"}} >
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
            valueStyle={{ color: '#3f8600' }}
            precision={2}
            suffix="$"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Account Type"
            value={wallet.cuenta_tipo}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            prefix={<MoneyCollectOutlined />}
            title="Currecy"
            value={wallet.moneda}

          />
        </Card>
      </Col>
    </Row>
  );
};

export default WalletDetail;
