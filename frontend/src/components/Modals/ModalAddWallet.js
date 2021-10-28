import React, { useState, useEffect , useContext } from 'react'
import {Modal, Space, Input, Select, message} from 'antd'
import {CalculatorOutlined, WalletFilled } from '@ant-design/icons'
import axios from 'axios'
import { updateActions } from "../../redux/slice/updateSlice";
import { useDispatch } from "react-redux";
import AuthContext from "../../context/auth-context";

const { Option } = Select;
const ModalAddWallet = (props) => {
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);

    const [descripcion, setDescripcion] = useState("")
    const [cuentaTipo, setCuentaTipo] = useState("")
    const [moneda, setMoneda] = useState("")

    const [currencies, setCurrencies] = useState([])
    const [accountTypes, setAccountTypes] = useState([])

    useEffect(() => {
        async function fetchMyAPI() {
          let responseCurrencies = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/currency/`);
          let responseAccountType = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/account-type/`);
          responseCurrencies = await responseCurrencies.data;
          responseAccountType = await responseAccountType.data;
          setCurrencies(responseCurrencies);
          setAccountTypes(responseAccountType);
        }
        fetchMyAPI();
        //eslint-disable-next-line
      }, []);

    const anniadirCuenta = async() =>{
        if (
            descripcion !== "" &&
            cuentaTipo !=="" &&
            moneda !== ""
          ) {
            await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/account`, {
              descripcion,
              cuenta_tipo:cuentaTipo,
              moneda: moneda,
              usuario: currentUser.displayName
            });
            message.success("New expense added succesfully!");
            dispatch(updateActions.toggle());
            dispatch(updateActions.toggleWallets());
            props.onCancel()
          }
    }
    return (
        <Modal
          title={<p>Do you want to add a wallet</p>}
          visible={props.visible}
          onOk={() => anniadirCuenta()}
          onCancel={() => props.onCancel()}
          okText="Submit"
          cancelText="Cancel"
        >
          <Space direction="vertical">
            <Input
              onChange={(e) => setDescripcion(e.target.value)}
              size="small"
              placeholder="Descripcion"
            />

            <Select
              showSearch
              style={{ width: 200 }}
              placeholder={
                <>
                  <CalculatorOutlined className="site-form-item-icon" /> Select an Account Type
                </>
              }
              optionFilterProp="children"
              onChange={(value) => setCuentaTipo(value)}
            >
              {accountTypes.map((account) => {
                return (
                  <Option value={account.cuenta_tipo}>
                    {account.descripcion}
                  </Option>
                );
              })}
            </Select>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder={
                <>
                  <WalletFilled className="site-form-item-icon" /> Select a currency
                </>
              }
              optionFilterProp="children"
              onChange={(value) => setMoneda(value)}
            >
              {currencies.map((curr) => {
                return (
                  <Option value={curr.moneda}>
                    {curr.descripcion}
                  </Option>
                );
              })}
            </Select>
          </Space>
        </Modal>
      );
}

export default ModalAddWallet
