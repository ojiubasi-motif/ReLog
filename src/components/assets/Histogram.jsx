/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ResponsiveContainer, BarChart, Tooltip, Bar } from "recharts";
import CustomTooltip from "./CustomTooltip";

const data = [
    { sessions: 12, period: "12:00 15-06-23 to 23:59 14-07-23" },
    { sessions: 19, period: "12:00 15-06-23 to 23:59 14-07-23" },
    { sessions: 5, period: "12:00 15-06-23 to 23:59 14-07-23" },
    { sessions: 24, period: "12:00 15-06-23 to 23:59 14-07-23" },
    { sessions: 14, period: "12:00 15-06-23 to 23:59 14-07-23" },
    { sessions: 9, period: "12:00 15-06-23 to 23:59 14-07-23" },
    { sessions: 20, period: "12:00 15-06-23 to 23:59 14-07-23" },
  ];
const Histogram = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={100} height={20} data={data}>
        <Tooltip />
        <Bar dataKey="sessions" fill="gray" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Histogram;
