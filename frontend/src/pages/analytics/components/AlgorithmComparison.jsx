import Card from "../../../components/common/Card";

function AlgorithmComparison({ analytics }) {

  const algorithms = [

    {
      name: "Dijkstra",
      runs: analytics.dijkstraRuns,
      status: "Ready"
    },

    {
      name: "A* Search",
      runs: analytics.aStarRuns,
      status: "Ready"
    }

  ];

  return (

    <Card
      title="Algorithm Comparison"
      subtitle="Routing performance"
    >

      <div className="space-y-4">

        {algorithms.map((algo) => (

          <div
            key={algo.name}
            className="flex items-center justify-between border-b border-white/10 pb-3 last:border-none"
          >

            <div>

              <h4 className="font-semibold text-white">
                {algo.name}
              </h4>

              <p className="text-sm text-slate-400">
                Runs : {algo.runs}
              </p>

            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-300">

              {algo.status}

            </span>

          </div>

        ))}

      </div>

    </Card>

  );

}

export default AlgorithmComparison;