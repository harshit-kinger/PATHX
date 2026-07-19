import Card from "../../../components/common/Card";

const features = [

  "✔ Dijkstra Algorithm",

  "✔ A* Search",

  "✔ Traffic-aware Routing",

  "✔ Interactive Maps",

  "✔ Emergency Dispatch",

  "✔ Route History",

  "✔ Algorithm Comparison",

  "✔ Graph Visualization"

];

function ProjectFeatures() {

  return (

    <Card
      title="Core Features"
      subtitle="Implemented modules"
    >

      <div className="space-y-3">

        {

          features.map((feature) => (

            <div
              key={feature}
              className="rounded-lg bg-slate-900 p-3 text-white"
            >

              {feature}

            </div>

          ))

        }

      </div>

    </Card>

  );

}

export default ProjectFeatures;
