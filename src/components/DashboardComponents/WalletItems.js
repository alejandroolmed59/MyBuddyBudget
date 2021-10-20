import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu } from "antd";
import {WalletFilled } from "@ant-design/icons";

const WalletItems = (props) => {
  const [wallets, setWallets] = useState([]);
  const { SubMenu } = Menu;
  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get("http://localhost:3800/account");
      response = await response.data;
      console.log(response);
      setWallets(response);
    };
    fetch();
  }, []);

  return (
    <SubMenu key="sub1" icon={<WalletFilled />} title="Wallets">
      {wallets.map((wallet) => {
        let id = "SubWallet" + wallet.cuenta;
        console.log(id);
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
