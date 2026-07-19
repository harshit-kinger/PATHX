import { useContext } from "react";
import MetricCard from "../../../components/common/MetricCard";
import { NavigationContext } from "../../../context/NavigationContext";

function GraphStats() {
  const { routeResult } = useContext(NavigationContext);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Total Nodes"
        value="20"
      />

      <MetricCard
        title="Road Connections"
        value="30"
      />

      <MetricCard
        title="Current Route"
        value={routeResult?.path?.length || 0}
      />

      <MetricCard
        title="Algorithm"
        value={routeResult?.algorithm || "None"}
      />

    </div>
  );
}

export default GraphStats;