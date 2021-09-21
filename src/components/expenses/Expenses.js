import React from "react";
import Card from "./ExpenseCard";
import { Row, Col } from "antd";
let arr=[1,2,3,4,5,6,7,8,9,10]
export default function Expenses() {
  return (
    <Row style={{marginLeft:'12px'}} gutter={[8,8]} justify="space-between">
        {arr.map(val=>{
            return <Col span={12}>
            <Card />
          </Col>
        })}

    </Row>
  );
}
