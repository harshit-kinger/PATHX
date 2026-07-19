import Card from "../../../components/common/Card";

const algorithms = [

  {
    name: "Dijkstra",
    status: "Ready",
    description: "Shortest Path",
    color: "bg-green-500",
  },

  {
    name: "A* Search",
    status: "Ready",
    description: "Heuristic Routing",
    color: "bg-green-500",
  },

  {
    name: "Traffic-aware Routing",
    status: "Ready",
    description: "Weighted Graph",
    color: "bg-green-500",
  },

  {
    name: "Emergency Routing",
    status: "Ready",
    description: "Priority Navigation",
    color: "bg-green-500",
  },

];

function AlgorithmOverview() {

  return (

    <Card
      title="Algorithm Overview"
      subtitle="Core routing engine"
    >

      <div className="space-y-4">

        {

          algorithms.map(({ name, status, description, color }) => (

            <div
              key={name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800 px-4 py-3"
            >

              <div>

                <h3 className="font-medium text-white">

                  {name}

                </h3>

                <p className="text-sm text-slate-400">

                  {description}

                </p>

              </div>

              <div className="flex items-center gap-2">

                <span
                  className={`h-3 w-3 rounded-full ${color}`}
                />

                <span className="text-sm font-medium text-green-300">

                  ✓ {status}

                </span>

              </div>

            </div>

          ))

        }

      </div>

    </Card>

  );

}

export default AlgorithmOverview;