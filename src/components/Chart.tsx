import { LineChart } from "lucide-react";
import React from "react";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart() {
  const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 },
    { name: "Mar", uv: 500 },
    { name: "Apr", uv: 200 },
    { name: "May", uv: 600 },
  ];
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <LineChart data={data}>
          {/* Gradient definitsiya */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity={1} />
            </linearGradient>
          </defs>

          {/* Gridni minimal qilamiz */}
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />

          {/* O‘qlar */}
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />

          {/* Hover qiymati */}
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          {/* Liniya */}
          <Line
            type="monotone"
            dataKey="uv"
            stroke="url(#colorUv)" // Gradient ulanadi
            strokeWidth={3}
            dot={false} // belgilarni olib tashlaymiz
            activeDot={{ r: 6, fill: "#4f46e5" }} // faqat hoverda chiqadi
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
