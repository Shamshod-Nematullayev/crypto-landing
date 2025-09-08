import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

interface Item {
  name: string;
  uv: number;
}

function CustomTooltip({
  active,
  payload,
  color,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
  color: "green" | "red";
}) {
  if (active && payload && payload.length) {
    console.log(arguments);
    return (
      <div className="bg-black text-white p-2 rounded-md shadow-md">
        <p className="font-medium">{payload[0].payload.name}</p>
        <div className="flex items-center">
          <div
            className={`inline-block w-4 h-4 border-1 border-${color}-400 mx-2 bg-${color}-100`}
          />
          {payload[0].value}
        </div>
      </div>
    );
  }
  return null;
}

function Chart({ data, color }: { data: Item[]; color: "green" | "red" }) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer>
        <AreaChart data={data}>
          {/* Hover qiymati */}
          <Tooltip content={<CustomTooltip color={"green"} />} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={color === "green" ? "#5dd662" : "#ff7272"}
            fill={color === "green" ? "#5dd66280" : "#ff727280"}
            dot={{
              r: 3,
              strokeWidth: 2,
              stroke: color === "green" ? "#5dd662" : "#ff7272",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
