
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

export default function Barchart({ completed, pending }) {
    const data = [
        {
            name: "Tasks",
            completed: completed,
            pending: pending,
        },
    ];
    return (
        <div className="w-[25rem] h-[290px] border-1 rounded-lg bg-white">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />

                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar
                        dataKey="completed"
                        name="Completed"
                        fill="#22c55e"
                    />

                    <Bar
                        dataKey="pending"
                        name="Pending"
                        fill="#ef4444"
                    />



                </BarChart>

            </ResponsiveContainer>

        </div>
    )
}
