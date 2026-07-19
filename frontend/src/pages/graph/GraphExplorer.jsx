import GraphStats from "./components/GraphStats";
import GraphInformation from "./components/GraphInformation";
import GraphPlaceholder from "./components/GraphPlaceholder";
import AlgorithmStatus from "../algorithm/components/AlgorithmStatus";

function GraphExplorer() {

    return (

        <div className="space-y-6">

            {/* ================= Header ================= */}

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Interactive Graph Explorer

                </h1>

                <p className="mt-2 text-slate-400">

                    Visualize the emergency road network, shortest path,
                    graph structure and algorithm execution.

                </p>

            </div>

            {/* ================= Statistics ================= */}

            <GraphStats />

            {/* ================= Information ================= */}

            <div className="grid gap-6 xl:grid-cols-2">

                <GraphInformation />

                <AlgorithmStatus />

            </div>

            {/* ================= Interactive Graph ================= */}

            <GraphPlaceholder />

        </div>

    );

}

export default GraphExplorer;