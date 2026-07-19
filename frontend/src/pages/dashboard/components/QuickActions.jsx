import {
  Navigation,
  Activity,
  BrainCircuit,
  Network,
} from "lucide-react";

import Card from "../../../components/common/Card";

const actions = [
  {
    title: "Find Route",
    icon: Navigation,
    color: "text-blue-400",
  },
  {
    title: "Traffic Simulation",
    icon: Activity,
    color: "text-yellow-400",
  },
  {
    title: "Run Benchmark",
    icon: BrainCircuit,
    color: "text-green-400",
  },
  {
    title: "Graph Explorer",
    icon: Network,
    color: "text-purple-400",
  },
];

function QuickActions() {
  return (
    <Card
      title="Quick Actions"
      subtitle="Frequently used operations"
    >
      <div className="grid gap-3">
        {actions.map(({ title, icon: Icon, color }) => (
          <button
            key={title}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800 p-4 transition-all hover:border-blue-500/30 hover:bg-slate-700"
          >
            <Icon className={color} size={22} />
            <span className="font-medium text-white">
              {title}
            </span>
          </button>
        ))}
      </div>
    </Card>
  );
}

export default QuickActions;