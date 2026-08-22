import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";



export default function Barchart({
    Work,
    Personal,
    Creative,
    Health,
    Learning,
}) {
const data = [
    { category: "Work", value: Work || 0 },
    { category: "Personal", value: Personal || 0 },
    { category: "Creative", value: Creative || 0 },
    { category: "Health", value: Health || 0 },
    { category: "Learning", value: Learning || 0 },
];

    return (
        <div className=" bg-white w-[30rem] h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data}>
                    <PolarGrid />

                    <PolarAngleAxis dataKey="category" />

                    <PolarRadiusAxis />

                    <Radar
                        name="Tasks"
                        dataKey="value"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />

                    <Tooltip />

            
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}