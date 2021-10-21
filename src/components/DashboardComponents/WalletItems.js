import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu } from "antd";
import {WalletFilled } from "@ant-design/icons";
import {useSelector} from 'react-redux'

const WalletItems = (props) => {
  const shouldUpdate = useSelector(store=>store.update.update)
  const [wallets, setWallets] = useState([]);
  const { SubMenu } = Menu;
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get("http://localhost:3800/account");
      response = await response.data;
      setWallets(response);
    };
    fetch();
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
