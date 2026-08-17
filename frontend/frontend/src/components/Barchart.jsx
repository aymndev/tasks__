import React from 'react'
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

export default function Barchart({completed,pandling}) {
    const data=
    [{
        name:'Tasks',
        completed:completed,
        pandling:pandling,
    },];

  return (
    <div>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3">
                    <XAxis dataKey="name">

                    </XAxis>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey={completed} name="completed"/>

                    <Bar dataKey={pandling} name="pandling"/>

                </CartesianGrid>

            </BarChart>

        </ResponsiveContainer>
    
    </div>
  )
}
