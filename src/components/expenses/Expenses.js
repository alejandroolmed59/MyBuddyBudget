import React, {useEffect, useState} from "react";
import Card from "./ExpenseCard";
import { Row, Col } from "antd";
import axios from 'axios'
import {useSelector} from 'react-redux'

export default function Expenses() {
  const shouldUpdate = useSelector(store=>store.update.update)

  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get("http://localhost:3800/expense/");
      response = await response.data;
      setExpenses(response);
    };
    fetch();
  }, [shouldUpdate]);

  return (
    <Row style={{marginLeft:'12px'}} gutter={[8,8]} justify="space-between">
        {expenses.map(expense=>{
            return <Col span={12} key={expense.expense}>
            <Card expense={expense}/>
          </Col>
        })}
        
    </Row>
  );
}
