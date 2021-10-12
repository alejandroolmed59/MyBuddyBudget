import React from "react";
import { Pie } from "@ant-design/charts";

const DemoPie = () => {
  const data = [
    {
      country: "Asia",
      year: "1750",
      value: 1000,
    },
    {
      country: "America",
      year: "1800",
      value: 2000,
    },
    {
      country: "Africa",
      year: "50",
      value: 3000,
    },
    {
      country: "Europe",
      year: "1800",
      value: 4000,
    },
  ];
  const config = {
    data,
    meta: {
      country: {
        alias: "Paiss",
        range: [0, 1],
      },
      value: {
        alias: "porcentaje",
        formatter: (v) => {
          return `${v}$`;
        },
      },
    },
    angleField: "value",
    colorField: "country",
  };
  return <Pie {...config} />;
};

export default DemoPie;
