import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", year2023: 74, year2024: 93.7 },
  { month: "Feb", year2023: 72, year2024: 91.2 },
  { month: "March", year2023: 69, year2024: 87.3 },
  { month: "April", year2023: 67, year2024: 84.8 },
  { month: "May", year2023: 65, year2024: 82.2 },
  { month: "June", year2023: 80, year2024: 101.4 },
  { month: "July", year2023: 85, year2024: 107.8 },

  { month: "Aug", year2023: 84, year2024: 106.5 },
  { month: "Sep", year2023: 82, year2024: 104.0 },
  { month: "Oct", year2023: 79, year2024: 100.1 },
  { month: "Nov", year2023: 76, year2024: 96.3 },
  { month: "Dec", year2023: 75, year2024: 95.0 },
];
// Custom dot to highlight July, normal dots for others
const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;

  // Highlight July
  if (payload.month === "July") {
    return <circle cx={cx} cy={cy} r={7} stroke="red" strokeWidth={2} />;
  }

  // Normal dots for other months
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill="#82ca9d"
      stroke="#8884d8"
      strokeWidth={1}
    />
  );
};

const Profile = () => {
  return (
    <div
      style={{
        width: "70%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
        Yearly Weather Data
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="year2023"
            stroke="#8884d8"
            strokeWidth={2}
            name="2023"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="year2024"
            stroke="#82ca9d"
            strokeWidth={2}
            name="2024"
            dot={<CustomizedDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Profile;
