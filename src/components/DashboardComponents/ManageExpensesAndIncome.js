import React from 'react'
import { Menu } from "antd";
import {MinusOutlined, PlusOutlined, BankOutlined} from "@ant-design/icons";
import ModalAddExpense from '../Modals/ModalAddExpense'
import { useState } from 'react/cjs/react.development';

const ManageExpensesAndIncome = () => {
    const [showModalExpense, setModalExpense] = useState(false)

    const closeModal = (modalName) =>{
      if(modalName==='expense') setModalExpense(false)
    }

    const { SubMenu } = Menu;
    return (
        <SubMenu key="subExpensesAndIncomeMenu" icon={<BankOutlined />} title="Expenses and income">

          <Menu.Item
            icon={<MinusOutlined />}
            danger
            key="expense"
            onClick={() =>{setModalExpense(true)}}
          >
              Add expense
            </Menu.Item>
          <ModalAddExpense visible={showModalExpense} closeModal={closeModal}/>
         <Menu.Item
            icon={<PlusOutlined/>}
            
            key="income"
            onClick={() =>{}}
          >
              Add income
            </Menu.Item>

    </SubMenu>
    )
}

export default ManageExpensesAndIncome
