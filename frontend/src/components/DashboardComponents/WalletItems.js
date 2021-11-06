import React, { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import {WalletFilled } from "@ant-design/icons";
import AuthContext from "../../context/auth-context";
import {useGetWalletsByNameQuery} from '../../redux/slice/walletsSlice'


const WalletItems = (props) => {
  const [wallets, setWallets] = useState([]);
  const { SubMenu } = Menu;
  const { currentUser } = useContext(AuthContext);
  const {data, isSuccess} = useGetWalletsByNameQuery(currentUser.displayName);

  useEffect(() => {
    const fetch = async () => {
      if(isSuccess&&data){
        setWallets(data);
      }
    };
    fetch();
  }, [isSuccess, data]);

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
