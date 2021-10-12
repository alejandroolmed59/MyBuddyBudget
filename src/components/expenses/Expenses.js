import React, {useEffect, useState} from "react";
import Card from "./ExpenseCard";
import { Row, Col } from "antd";
import axios from 'axios'

export default function Expenses() {

  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get("http://localhost:3800/expense/");
      response = await response.data;
      console.log(response);
      setExpenses(response);
    };
    fetch();
  }, []);

  return (
    <Row style={{marginLeft:'12px'}} gutter={[8,8]} justify="space-between">
        {expenses.map(expense=>{
            return <Col span={12}>
            <Card expense={expense}/>
          </Col>
        })}

    </Row>
  );
}
