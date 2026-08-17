
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

export default function Barchart({ completed, pandling }) {
    const data =
        [{
            name: 'Tasks',
            completed: completed,
            pandling: pandling,
        },];

    return (
        <div className="w-[25rem] h-[290px] border-1 rounded-lg bg-white">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />

                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="completed" name="completed" fill="#22c55e" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="pandling" name="Pendling" fill="#ef4444" radius={[8, 8, 0, 0]} />



                </BarChart>

            </ResponsiveContainer>

        </div>
    )
}
