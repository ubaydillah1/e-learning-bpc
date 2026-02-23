"use client";

import { Button } from "@/components/ui/button";
import { EyeIcon } from "@/public/assets/icons";
import {
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "ACC 1", mtk: 40, ipa: 50, bing: 60, bindo: 70 },
  { name: "ACC 2", mtk: 60, ipa: 75, bing: 55, bindo: 65 },
  { name: "ACC 3", mtk: 50, ipa: 70, bing: 80, bindo: 70 },
  { name: "ACC 4", mtk: 65, ipa: 55, bing: 40, bindo: 65 },
  { name: "ACC 5", mtk: 88, ipa: 80, bing: 88, bindo: 70 },
  { name: "ACC 5", mtk: 88, ipa: 80, bing: 88, bindo: 70 },
];

const AccTestCard = () => {
  return (
    <div className="bg-white rounded-[16px] p-6 space-y-6">
      <div className="space-y-1">
        <h3 className="b1-b">Nilai ACC Test Sem 1 - Kelas 9</h3>
        <p className="b3-r">Affandy Affan</p>
      </div>

      <div className="w-full h-[300px] pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              dy={10}
            />
            <YAxis hide />
            <Legend
              verticalAlign="bottom"
              content={({ payload }) => (
                <div className="flex justify-center gap-4 b3-r w-full">
                  {payload?.map((entry, index) => (
                    <div
                      key={`item-${index}`}
                      className="flex items-center -mb-4"
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span>{entry.value}</span>
                    </div>
                  ))}
                </div>
              )}
            />
            <Line
              type="monotone"
              dataKey="mtk"
              name="MTK"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ r: 4, fill: "#3B82F6", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              label={{ position: "top", fontSize: 10, fill: "#6B7280" }}
            />
            <Line
              type="monotone"
              dataKey="ipa"
              name="IPA"
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ r: 4, fill: "#22C55E", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              label={{ position: "top", fontSize: 10, fill: "#6B7280" }}
            />
            <Line
              type="monotone"
              dataKey="bing"
              name="B. Ing"
              stroke="#EF4444"
              strokeWidth={2}
              dot={{ r: 4, fill: "#EF4444", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              label={{ position: "top", fontSize: 10, fill: "#6B7280" }}
            />
            <Line
              type="monotone"
              dataKey="bindo"
              name="B. Indo"
              stroke="#F97316"
              strokeWidth={2}
              dot={{ r: 4, fill: "#F97316", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              label={{ position: "top", fontSize: 10, fill: "#6B7280" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Button
        variant="outline"
        className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600"
      >
        Lihat Detail <EyeIcon className="stroke-current" />
      </Button>
    </div>
  );
};

export default AccTestCard;
