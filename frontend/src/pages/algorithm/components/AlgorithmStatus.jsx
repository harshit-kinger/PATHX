import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

function AlgorithmStatus() {

    const { comparison } = useContext(NavigationContext);

    if (!comparison) {

        return (

            <Card
                title="Algorithms"
                subtitle="Run a route to compare algorithms"
            >

                <div className="py-10 text-center text-slate-400">

                    Calculate a route to view live algorithm statistics.

                </div>

            </Card>

        );

    }

    const algorithms = [

        {
            name: "Dijkstra",
            time: comparison.dijkstra.executionTime.toFixed(2),
            nodes: comparison.dijkstra.visitedNodes,
            distance: comparison.dijkstra.distance,
            winner: comparison.winner === "Dijkstra"
        },

        {
            name: "A* Search",
            time: comparison.astar.executionTime.toFixed(2),
            nodes: comparison.astar.visitedNodes,
            distance: comparison.astar.distance,
            winner: comparison.winner === "A*"
        }

    ];

    return (

        <Card
            title="Live Algorithm Comparison"
            subtitle="Current route performance"
        >

            <div className="space-y-4">

                {

                    algorithms.map((algo) => (

                        <div
                            key={algo.name}
                            className="rounded-lg border border-slate-700 p-4"
                        >

                            <div className="flex items-center justify-between">

                                <h3 className="font-semibold text-white">

                                    {algo.name}

                                </h3>

                                {

                                    algo.winner &&

                                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-300">

                                        🏆 Winner

                                    </span>

                                }

                            </div>

                            <div className="mt-3 grid grid-cols-3 gap-3 text-sm">

                                <div>

                                    <p className="text-slate-400">

                                        Time

                                    </p>

                                    <p className="font-semibold text-white">

                                        {algo.time} ms

                                    </p>

                                </div>

                                <div>

                                    <p className="text-slate-400">

                                        Nodes

                                    </p>

                                    <p className="font-semibold text-white">

                                        {algo.nodes}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-slate-400">

                                        Distance

                                    </p>

                                    <p className="font-semibold text-white">

                                        {algo.distance} km

                                    </p>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </Card>

    );

}

export default AlgorithmStatus;