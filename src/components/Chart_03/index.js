import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  /*Cell,*/
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import data from '../../json/df_less_more_70.json';

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  render() {
    return (
      <BarChart
        width={300}
        height={170}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="list" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="more70" stackId="a" fill="#82ca9d" />
        <Bar dataKey="less70" stackId="b" fill="#F08080" />
        {/* <Bar dataKey="Prediação_de_Reprovados" fill="#ffc658" /> */}
      </BarChart>
    );
  }
}