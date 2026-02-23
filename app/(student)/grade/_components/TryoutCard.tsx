"use client";

import { Button } from "@/components/ui/button";
import { EyeIcon } from "@/public/assets/icons";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  { name: "TKA 1", bi: 80, mtk: 72 },
  { name: "TKA 2", bi: 82, mtk: 84 },
  { name: "TKA 3", bi: 84, mtk: 82 },
  { name: "TKA 4", bi: 80, mtk: 90 },
  { name: "TKA 5", bi: 92, mtk: 84 },
  { name: "TKA 6", bi: 80, mtk: 72 },
];

const TryoutCard = () => {
  return (
    <div className="bg-white rounded-[16px] p-6 space-y-6">
      <div className="space-y-1">
        <h3 className="b1-b">Nilai Tryout TKA - Kelas 9</h3>
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
              bottom: 10,
            }}
            barGap={8}
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
                      className="flex items-center -mb-6"
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
            <Bar
              dataKey="bi"
              name="Bahasa Indonesia"
              fill="#F97316"
              radius={[4, 4, 0, 0]}
              barSize={12}
              label={{ position: "top", fontSize: 10, fill: "#6B7280" }}
            />
            <Bar
              dataKey="mtk"
              name="Matematika"
              fill="#6366F1"
              radius={[4, 4, 0, 0]}
              barSize={12}
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

export default TryoutCard;
