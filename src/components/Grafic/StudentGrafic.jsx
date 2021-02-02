import React from 'react';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  ComposedChart
} from "recharts";
function App(props) {
  const data = props.json.filter(item => item.registration !== null
    && item.registration.trim() === props.registration.trim());

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.dataKeyX} />
          <YAxis unit="%" type="number"
            label={{ value: 'Percentual por nota', angle: -90, viewBox: { x: 0, y: 45, width: 50, height: 50 } }} />
          <Tooltip />
          <Legend />
          <Bar type="number" dataKey={props.dataKeyBar} fill={props.fill} name={props.name} />
          {props.dataKeyBar1 ?
            <Line type="monotone" dataKey={props.dataKeyBar1} stroke={props.fill1} name={props.name1} /> : ''}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
