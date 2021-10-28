import React, {useEffect, useState, useContext} from "react";
import Card from "./ExpenseCard";
import { Row, Col } from "antd";
import axios from 'axios'
import {useSelector} from 'react-redux'
import AuthContext from "../../context/auth-context";

export default function Expenses() {
  const shouldUpdate = useSelector(store=>store.update.update)
  const { currentUser } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/expense/${currentUser.displayName}`);
      response = await response.data;
      setExpenses(response);
    };
    fetch();
  }, [shouldUpdate, currentUser.displayName]);

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
