import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

const optimizationOptions = [
  {
    id: "fastest",
    name: "⚡ Fastest Route",
    description: "Minimize total travel time.",
  },
  {
    id: "leastTraffic",
    name: "🚦 Least Traffic",
    description: "Avoid congested roads.",
  },
  {
    id: "emergencyPriority",
    name: "🚑 Emergency Priority",
    description: "Prioritize emergency response.",
  },
];

function OptimizationSelector() {
  const { optimization, setOptimization } =
    useContext(NavigationContext);

  return (
    <Card
      title="Optimization Goal"
      subtitle="Choose how the route should be optimized"
    >
      <div className="space-y-3">
        {optimizationOptions.map((item) => (
          <label
            key={item.id}
            className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
              optimization === item.id
                ? "border-green-500 bg-green-500/10"
                : "border-white/10 bg-slate-800 hover:border-green-500/40"
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
              name="optimization"
              checked={optimization === item.id}
              onChange={() => setOptimization(item.id)}
            />
          </label>
        ))}
      </div>
    </Card>
  );
}

export default OptimizationSelector;