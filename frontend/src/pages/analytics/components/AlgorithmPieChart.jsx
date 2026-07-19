import Card from "../../../components/common/Card";

import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Cell,

    Tooltip,

    Legend

} from "recharts";

const COLORS = [

    "#3b82f6",

    "#22c55e"

];

function AlgorithmPieChart({ analytics }) {

    const data = [

        {

            name: "Dijkstra",

            value: analytics.dijkstraRuns

        },

        {

            name: "A* Search",

            value: analytics.aStarRuns

        }

    ];

    return (

        <Card

            title="Algorithm Usage"

            subtitle="Distribution of routing algorithms"

        >

            <div className="h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie

                            data={data}

                            dataKey="value"

                            outerRadius={100}

                            label

                        >

                            {

                                data.map((entry, index) => (

                                    <Cell

                                        key={index}

                                        fill={COLORS[index]}

                                    />

                                ))

                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}

export default AlgorithmPieChart;