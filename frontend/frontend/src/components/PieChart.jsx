import { Pie, PieChart, Tooltip, Legend } from 'recharts';


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
    return (
        <div>
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    dataKey='value'
                    nameKey='name'
                    cx="50%"
                    cy="50%"

                    outerRadius={100}
                    label


                />
                <Tooltip />
                <Legend />

            </PieChart>


        </div>
    )
}
