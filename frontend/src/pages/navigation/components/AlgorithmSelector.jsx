import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

const algorithms = [

  {
    id: "dijkstra",
    name: "Dijkstra",
    description: "Guaranteed shortest path using weighted graphs.",
  },

  {
    id: "astar",
    name: "A* Search",
    description: "Heuristic-based routing for faster pathfinding.",
  }

];

function AlgorithmSelector() {

  const { algorithm, setAlgorithm } =
    useContext(NavigationContext);

  return (

    <Card
      title="Routing Algorithm"
      subtitle="Choose the routing engine"
    >

      <div className="space-y-3">

        {

          algorithms.map((item) => (

            <label
              key={item.id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                algorithm === item.id
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-slate-800 hover:border-blue-500/40"
              }`}
            >

              <div>

                <p className="font-semibold text-white">
                  {item.name}
                </p>

                <p className="text-sm text-gray-400">
                  {item.description}
                </p>

              </div>

              <input
                type="radio"
                name="algorithm"
                checked={algorithm === item.id}
                onChange={() => setAlgorithm(item.id)}
              />

            </label>

          ))

        }

      </div>

    </Card>

  );

}

export default AlgorithmSelector;