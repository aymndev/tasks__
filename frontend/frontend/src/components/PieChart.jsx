import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";


export default function PieChartd({ completed, pending }) {
    const data =
        [{
            name: "Completed",
            value: completed,

        }

            ,
        {
            name: "Pending",
            value: pending,
        },
        ];
    const COLORS = ["#22c55e", "#ef4444"];
    return (
        <div className=" border-1  rounded-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-5">
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index]}
                        />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />

            </PieChart>


        </div>
    )
}
