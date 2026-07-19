import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

function BenchmarkPanel() {

    const { comparison } = useContext(NavigationContext);

    if (!comparison) {

        return (

            <Card
                title="Performance Benchmark"
                subtitle="Live algorithm comparison"
            >

                <div className="py-10 text-center text-slate-400">

                    Calculate a route to generate benchmark statistics.

                </div>

            </Card>

        );

    }

    const maxTime = Math.max(

        comparison.dijkstra.executionTime,

        comparison.astar.executionTime

    );

    const dijkstraWidth =
        (comparison.dijkstra.executionTime / maxTime) * 100;

    const astarWidth =
        (comparison.astar.executionTime / maxTime) * 100;

    return (

        <Card
            title="Performance Benchmark"
            subtitle="Execution time comparison"
        >

            <div className="space-y-6">

                <div>

                    <div className="mb-2 flex justify-between">

                        <span className="text-white">

                            Dijkstra

                        </span>

                        <span className="text-slate-300">

                            {comparison.dijkstra.executionTime.toFixed(2)} ms

                        </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-700">

                        <div
                            className="h-3 rounded-full bg-blue-500"
                            style={{ width: `${dijkstraWidth}%` }}
                        />

                    </div>

                </div>

                <div>

                    <div className="mb-2 flex justify-between">

                        <span className="text-white">

                            A* Search

                        </span>

                        <span className="text-slate-300">

                            {comparison.astar.executionTime.toFixed(2)} ms

                        </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-700">

                        <div
                            className="h-3 rounded-full bg-green-500"
                            style={{ width: `${astarWidth}%` }}
                        />

                    </div>

                </div>

                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">

                    <div className="text-center">

                        <p className="text-sm text-slate-300">

                            Fastest Algorithm

                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-green-400">

                            🏆 {comparison.winner}

                        </h2>

                    </div>

                </div>

            </div>

        </Card>

    );

}

export default BenchmarkPanel;