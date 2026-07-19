import { useContext } from "react";
import MetricCard from "../../../components/common/MetricCard";
import { NavigationContext } from "../../../context/NavigationContext";

function AlgorithmCards() {
  const { routeResult } = useContext(NavigationContext);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Current Algorithm"
        value={routeResult?.algorithm || "None"}
      />

      <MetricCard
        title="Visited Nodes"
        value={routeResult?.visitedNodes ?? "--"}
      />

      <MetricCard
        title="Execution Time"
        value={
          routeResult
            ? `${routeResult.executionTime} ms`
            : "--"
        }
      />

      <MetricCard
        title="Route Distance"
        value={
          routeResult
            ? `${routeResult.distance} km`
            : "--"
        }
      />

    </div>
  );
}

export default AlgorithmCards;