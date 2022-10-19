import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Expense: 1825, Income: 4125 },
  { name: "Februari", Expense: 2200, Income: 4200 },
  { name: "March", Expense: 1925, Income: 4000 },
  { name: "April", Expense: 3985, Income: 3900 },
  { name: "May", Expense: 2455, Income: 4400 },
  { name: "June", Expense: 2155, Income: 4100 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Expense"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#expense)"
          />
          <Area
            type="monotone"
            dataKey="Income"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#income)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
