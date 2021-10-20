import React, { useState, useEffect } from "react";
import { Modal, Select, InputNumber, Input, Space } from "antd";
import { UserOutlined, BookOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const ModalBorrow = (props) => {
  const [selectedExpenseType, setSelectedExpenseType] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [expensesTypeArr, setExpensesArr] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://localhost:3800/expense-type/");
      response = await response.data;
      setExpensesArr(response);
    }
    fetchMyAPI();
    //eslint-disable-next-line
  }, []);

  const addExpensePost = async() => {
    if(selectedExpenseType!=="" && descripcion!=="" && precio!==0){
      let response = await axios.post('http://localhost:3800/expense', {
        descripcion, precio, usuario:'olme59', expense_categoria:selectedExpenseType
      })
      console.log(response);
      
    }
  };

  console.log(selectedExpenseType);
  console.log(descripcion)
  return (
    <Modal
      title={
        <>
          <BookOutlined className="site-form-item-icon" />
          <p>Do you want to add an expense?</p>
        </>
      }
      visible={props.visible}
      onOk={() => addExpensePost()}
      onCancel={() => props.closeModal("expense")}
      okText="Submit"
      cancelText="Cancel"
    >
      <Space direction="vertical">
        <Input
          onChange={(e)=>setDescripcion(e.target.value)}
          size="small"
          placeholder="Descripcion"
        />
        <InputNumber
          formatter={value=> `$ ${value}`}
          onChange={setPrecio}
        />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder={
            <>
              <UserOutlined className="site-form-item-icon" />
              <p>Select a category</p>
            </>
          }
          optionFilterProp="children"
          onChange={(value) => setSelectedExpenseType(value)}
        >
          {expensesTypeArr.map((expense) => {
            return (
              <Option value={expense.expense_categoria}>
                {expense.descripcion}
              </Option>
            );
          })}
        </Select>
      </Space>
    </Modal>
  );
};
export default ModalBorrow;
