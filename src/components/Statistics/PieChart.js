import React from "react";
import { Pie } from "@ant-design/charts";

const DemoPie = (props) => {
  console.log(props.wallets)
  const data = props.wallets.map(el=>{
    return {
      descripcion:el.descripcion,
      saldo:Number(el.saldo)
    }
  })

  const config = {
    data,
    angleField: "saldo",
    colorField: "descripcion",
  };
  return <Pie {...config} />;
};

export default DemoPie;
