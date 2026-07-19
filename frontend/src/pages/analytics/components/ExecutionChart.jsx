import Card from "../../../components/common/Card";

import {

    ResponsiveContainer,

    BarChart,

    CartesianGrid,

    XAxis,

    YAxis,

    Tooltip,

    Bar

} from "recharts";

function ExecutionChart({ analytics }) {

    const data = [

        {

            algorithm: "Dijkstra",

            execution: analytics.averageExecution + 0.8

        },

        {

            algorithm: "A*",

            execution: analytics.averageExecution

        }

    ];

    return (

        <Card

            title="Execution Time"

            subtitle="Average algorithm execution (ms)"

        >

            <div className="h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                        <XAxis dataKey="algorithm" stroke="#94a3b8" />

                        <YAxis stroke="#94a3b8" />

                        <Tooltip />

                        <Bar

                            dataKey="execution"

                            fill="#3b82f6"

                            radius={[8, 8, 0, 0]}

                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}

export default ExecutionChart;