import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

function GraphInformation() {
  const { routeResult } = useContext(NavigationContext);

  return (
    <Card
      title="Graph Information"
      subtitle="Current network information"
    >

      <div className="space-y-4">

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-slate-400">
            Graph Type
          </span>

          <span className="font-semibold text-white">
            Weighted Undirected
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-slate-400">
            Dataset
          </span>

          <span className="font-semibold text-white">
            Chandigarh Tri-City
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-slate-400">
            Current Algorithm
          </span>

          <span className="font-semibold text-blue-400">
            {routeResult?.algorithm || "Not Selected"}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-slate-400">
            Route Nodes
          </span>

          <span className="font-semibold text-white">
            {routeResult?.path?.length || 0}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Status
          </span>

          <span className="font-semibold text-green-400">
            Connected
          </span>
        </div>

      </div>

    </Card>
  );
}

export default GraphInformation;