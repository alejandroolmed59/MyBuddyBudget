import React from 'react'
import { Menu } from "antd";
import {MinusOutlined, PlusOutlined, BankOutlined} from "@ant-design/icons";
import ModalAddExpense from '../Modals/ModalAddExpense'
import { useState } from 'react/cjs/react.development';

const ManageExpensesAndIncome = () => {
    const [showModalExpense, setModalExpense] = useState(false)
    const [isExpense, setIsExpense] = useState(null)

    const closeModal = () =>{
      setModalExpense(false)
    }

    const { SubMenu } = Menu;
    return (
        <SubMenu key="subExpensesAndIncomeMenu" icon={<BankOutlined />} title="Expenses and income">

          <Menu.Item
            icon={<MinusOutlined />}
            danger
            key="expense"
            onClick={() =>{setModalExpense(true); setIsExpense(true)}}
          >
              Add expense
            </Menu.Item>
          
         <Menu.Item
            icon={<PlusOutlined/>}
            
            key="income"
            onClick={() =>{setModalExpense(true); setIsExpense(false)}}
          >
            Add income
            </Menu.Item>
          <ModalAddExpense visible={showModalExpense} closeModal={closeModal} isExpense={isExpense}/>

    </SubMenu>
    )
}

export default ManageExpensesAndIncome
