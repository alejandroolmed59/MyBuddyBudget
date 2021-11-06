import React, { useState, useEffect, useContext } from "react";
import { Modal, Select, InputNumber, Input, Space, message } from "antd";
import {
  BookOutlined,
  WalletFilled,
  CalculatorOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { updateActions } from "../../redux/slice/updateSlice";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../context/auth-context";
import {useGetWalletsByNameQuery} from '../../redux/slice/walletsSlice'

const { Option } = Select;

const ModalBorrow = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const [selectedExpenseType, setSelectedExpenseType] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);

  const [expensesTypeArr, setExpensesArr] = useState([]);
  const [wallets, setWallets] = useState([]);

  const {data, isSuccess} = useGetWalletsByNameQuery(currentUser.displayName);
  const shouldUpdate = useSelector(store=>store.update.update)

  useEffect(() => {
    
    async function fetchMyAPI() {
      let responseExp = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/expense-type/`);
      responseExp = await responseExp.data;
      setExpensesArr(responseExp);
    }
    fetchMyAPI();
    if(isSuccess&&data) setWallets(data)
    //eslint-disable-next-line
  }, [isSuccess,data,shouldUpdate]);

  const addExpensePost = async () => {
    if (props.isExpense) {
      try {
        if (wallets.find((el) => el.cuenta === selectedWallet).saldo < precio)
          throw Error("Insuficiente fondos");

        if (
          selectedExpenseType !== "" &&
          descripcion !== "" &&
          precio !== 0 &&
          selectedWallet !== ""
        ) {
          await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/expense/pay`, {
            descripcion,
            precio: -precio,
            usuario: currentUser.displayName,
            expense_categoria: selectedExpenseType,
            walletid: selectedWallet,
          });
          message.success("New expense added succesfully!");
          dispatch(updateActions.toggle());
          dispatch(updateActions.toggleWallets());
          props.closeModal();
        }
      } catch (e) {
        message.error("Fondos insuficientes");
      }
    }else{
      try{
        if (
          selectedExpenseType !== "" &&
          descripcion !== "" &&
          precio !== 0 &&
          selectedWallet !== ""
        ) {
          await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/expense/pay`, {
            descripcion,
            precio: precio,
            usuario: currentUser.displayName,
            expense_categoria: selectedExpenseType,
            walletid: selectedWallet,
          });
          message.success("New income added succesfully!");
          dispatch(updateActions.toggle());
          dispatch(updateActions.toggleWallets());
          props.closeModal();
        }
      }
      catch (e) {
        message.error("Error añadiendo income");
      }
    }
  };

  return (
    <Modal
      title={
        <>
          <BookOutlined className="site-form-item-icon" />
          {props.isExpense ? (
            <p>
              Do you want to add an <strong className="redNumbers">expense</strong>?
            </p>
          ) : (
            <p>
              Do you want to add an <strong className="greenNumbers">income</strong>?
            </p>
          )}
        </>
      }
      visible={props.visible}
      onOk={() => addExpensePost()}
      onCancel={() => props.closeModal()}
      okText="Submit"
      cancelText="Cancel"
    >
      <Space direction="vertical">
        <Input
          onChange={(e) => setDescripcion(e.target.value)}
          size="small"
          placeholder="Descripcion"
        />
        <InputNumber
          min={0}
          formatter={(value) => `$ ${value}`}
          onChange={setPrecio}
        />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder={
            <>
              <CalculatorOutlined className="site-form-item-icon" /> Select a
              category
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
      </Space>
    </Modal>
  );
};
export default ModalBorrow;
