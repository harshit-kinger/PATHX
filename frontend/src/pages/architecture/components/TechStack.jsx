import Card from "../../../components/common/Card";

const tech = [

  "React 19",

  "Node.js",

  "Express",

  "C++17",

  "Tailwind CSS",

  "Leaflet",

  "React Flow",

  "CSV Dataset"

];

function TechStack() {

  return (

    <Card
      title="Technology Stack"
      subtitle="Technologies used"
    >

      <div className="grid grid-cols-2 gap-3">

        {

          tech.map((item) => (

            <div
              key={item}
              className="rounded-lg border border-slate-700 p-3 text-center text-white"
            >

              {item}

            </div>

          ))

        }

      </div>

    </Card>

  );

}

export default TechStack;