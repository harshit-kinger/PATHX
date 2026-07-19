import Card from "../../../components/common/Card";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const data = [

    { day: "Mon", routes: 22 },

    { day: "Tue", routes: 28 },

    { day: "Wed", routes: 35 },

    { day: "Thu", routes: 31 },

    { day: "Fri", routes: 39 },

    { day: "Sat", routes: 48 },

    { day: "Sun", routes: 42 }

];

function RouteTrendChart() {

    return (

        <Card
            title="Weekly Route Optimization"
            subtitle="Optimized routes during the last 7 days"
        >

            <div className="h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                        <XAxis dataKey="day" stroke="#94a3b8" />

                        <YAxis stroke="#94a3b8" />

                        <Tooltip />

                        <Line

                            type="monotone"

                            dataKey="routes"

                            stroke="#3b82f6"

                            strokeWidth={3}

                            dot={{ r: 5 }}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}

export default RouteTrendChart;