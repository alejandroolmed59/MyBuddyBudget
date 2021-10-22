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
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    meta:{
      descripcion:{
        alias:"WALLET"
      },
      saldo:{
        alias:"SALDO DISPONIBLE",
        formatter: (value)=>{
          return `$${value} USD`
        }
      }
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;
