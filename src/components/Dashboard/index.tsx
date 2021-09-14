import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";

const data = [
  {
    name: "Jan",
    Emails: 40,

    amt: 2400,
  },
  {
    name: "Fev",
    Emails: 30,

    amt: 2210,
  },
  {
    name: "Mar",
    Emails: 20,

    amt: 2290,
  },
  {
    name: "Abr",
    Emails: 27,

    amt: 2000,
  },
  {
    name: "Mai",
    Emails: 18,

    amt: 2181,
  },
  {
    name: "Jun",
    Emails: 23,

    amt: 2500,
  },
  {
    name: "Jul",
    Emails: 34,

    amt: 2100,
  },
  {
    name: "Ago",
    Emails: 34,

    amt: 2100,
  },
  {
    name: "Set",
    Emails: 42,

    amt: 2100,
  },
  {
    name: "Out",
    Emails: 10,

    amt: 2100,
  },
  {
    name: "Nov",
    Emails: 70,

    amt: 2100,
  },
  {
    name: "Dez",
    Emails: 50,

    amt: 2100,
  },
];

export const Dashboard: React.FC = () => {
  return (
    <>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Emails"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
    </>
  );
};

export default Dashboard;
