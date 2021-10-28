import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Menu } from "antd";
import {WalletFilled } from "@ant-design/icons";
import {useSelector} from 'react-redux'
import AuthContext from "../../context/auth-context";

const WalletItems = (props) => {
  const shouldUpdate = useSelector(store=>store.update.update)
  const [wallets, setWallets] = useState([]);
  const { SubMenu } = Menu;
  const { currentUser } = useContext(AuthContext);
  
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/account/${currentUser.displayName}`);
      response = await response.data;
      setWallets(response);
    };
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldUpdate]);

  return (
    <SubMenu key="sub1" icon={<WalletFilled />} title="Wallets">
      {wallets.map((wallet) => {
        let id = "SubWallet" + wallet.cuenta;
        return (
          <Menu.Item
            key={id}
            onClick={() => props.cb(`${props.path}/wallet/`, wallet)}
          >
            {wallet.descripcion}
          </Menu.Item>
        );
      })}
    </SubMenu>
  );
};

export default WalletItems;
